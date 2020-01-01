import React, { Component } from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import MyFeed from './MyFeed';
import NewFeedback from './NewFeedback';
import Blockchain from './Blockchain';

export default class MenuExampleStackable extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        console.log("stackable")
        console.log(props.feedbacks)

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    createPanes() {
        const panes = [
            {
                menuItem: { key: 'feed', icon: 'content', content: 'Akış' },
                render: () => <MyFeed feedbacks={this.props.feedbacks}></MyFeed>,
            },
            {
                menuItem: { key: 'newFeedback', icon: 'edit', content: 'Yeni Geri Bildirim' },
                render: () => <NewFeedback></NewFeedback>,
            },
            {
                menuItem: { key: 'blockchain', icon: 'chain', content: 'Blok Zinciri Görüntüle' },
                render: () => <Blockchain></Blockchain>,
            },

            // {
            //     menuItem: (
            //         <Menu.Item key='messages'>
            //             Messages<Label>15</Label>
            //         </Menu.Item>
            //     ),
            //     render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
            // },
        ]
        return panes;
    }

    render() {
        const { activeItem } = this.state

        return (
            <Tab panes={this.createPanes()} />
        )
    }
}