import React, { Component } from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import MyFeed from './MyFeed';
import NewFeedback from './NewFeedback';

export default class MenuExampleStackable extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    createPanes() {
        const panes = [
            {
                menuItem: { key: 'feed', icon: 'content', content: 'Akış' },
                render: () => <MyFeed></MyFeed>,
            },
            {
                menuItem: { key: 'newFeedback', icon: 'edit', content: 'Yeni Geri Bildirim' },
                render: () => <NewFeedback></NewFeedback>,
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