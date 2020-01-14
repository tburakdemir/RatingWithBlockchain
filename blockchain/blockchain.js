const SHA256 = require("crypto-js/sha256");

function calculateHash({ previousHash, timestamp, data, nonce = 1 }) {
    return SHA256(previousHash + timestamp + JSON.stringify(data) + nonce).toString();
}

module.exports.generateGenesisBlock = function generateGenesisBlock() {
    const block = {
        timestamp: + new Date(),
        data: "Genesis Block",
        previousHash: "0",
    };
    return {
        ...block,
        hash: calculateHash(block)
    }
}

function checkDifficulty(difficulty, hash) {
    return hash.substr(0, difficulty) === "0".repeat(difficulty)
}

function nextNonce(block) {
    return updateHash({ ...block, nonce: block.nonce + 1 })
}

function updateHash(block) {
    return { ...block, hash: calculateHash(block) }
}

function trampoline(func) {
    let result = func.apply(func, ...arguments);
    while (result && typeof (result) === "function") {
        result = result();
    }
    return result;
}

function mineBlock(difficulty, block) {
    function mine(block) {
        const newBlock = nextNonce(block);
        return checkDifficulty(difficulty, newBlock.hash)
            ? newBlock
            : () => mine(nextNonce(block));
    }
    return trampoline(mine(nextNonce(block)));
}

module.exports.addBlock = function addBlock(chain, data) {
    const { hash: previousHash } = chain[chain.length - 1];
    const block = { timestamp: + new Date(), data, previousHash, nonce: 0 }
    const newBlock = mineBlock(3, block);
    return chain.concat(newBlock);
}

function validateChain(chain) {
    function tce(chain, index) {
        if (index === 0) return true;
        const { hash, ...currentBlockWithoutHash } = chain[index];
        const currentBlock = chain[index];
        const previousBlock = chain[index - 1];
        const isValidHash = (hash === calculateHash(currentBlockWithoutHash));
        const isPreviousHashValid = (currentBlock.previousHash === previousBlock.hash);
        const isValidChain = (isValidHash && isPreviousHashValid);

        if (!isValidChain) return false;
        else return tce(chain, index - 1);
    }
    return tce(chain, chain.length - 1)
}

// let chain = [generateGenesisBlock()];
// const newBlockData = {
//     sender: "ks829fh28192j28d9dk9",
//     receiver: "ads8d91w29jsm2822910",
//     amount: 0.0023,
//     currency: "BTC"
// }

// const newBlockData2 = {
//     sender: "ali",
//     receiver: "mehmet",
//     message: "great",

// }



