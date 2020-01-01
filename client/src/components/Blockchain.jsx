import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import axios from 'axios'

export default class Blockchain extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            feedbacks: []
        }

    }
    componentDidMount() {
        axios.get('/api/feedbacks').then(res => {
            console.log("feedbacks")
            console.log(res.data)
            this.setState({ feedbacks: res.data })
        })
    }

    render() {

        let arr = [
            "WY5Nfq6Ycnt4hc9q",
            "I9efFoDtayBbvFs5",
            "S37azmiZFPvWyZhP",
            "SWxlDOoyGQoWzKNt",
            "gGYQVgyyCqBFhVkw",
            "cChjwCS7C3Kj68i8",
            "ATEx4WfTu45RcGcT",
            "J63VABMMJtvw4fJX",
            "ytlpzrzgBC966isM",
            "kSU8e0mKxyDKhLna",
        ]

        const renderChain = this.state.feedbacks.map((item, i) => {
            console.log(i)
            return <div><Popup position='right center' content={"Mesaj: " + item.message} trigger={<Icon link name='chain' color='green' rotated='counterclockwise' size='big' />}>
            </Popup ></div>
        })

        return (<div>
            {renderChain}
            < div > <Icon link name='broken chain' color='red' rotated='counterclockwise' size='big'></Icon>
                {renderChain}
            </div >
        </div >
        )
    }
}