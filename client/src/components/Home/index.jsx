
import React from 'react'
import { Button } from 'semantic-ui-react'
import StackableMenu from '../StackableMenu';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        return <StackableMenu user={this.props.user}></StackableMenu>
    }

}