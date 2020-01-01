import React from 'react';
import { useBooleanKnob } from '@stardust-ui/docs-components'

import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class MySidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    setVisible(bool) {
        console.log(bool)
        this.props.visible = bool
    }


    render() {
        const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
        return <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => this.setVisible(false)}
                onShow={() => this.setVisible(true)}
                vertical
                visible={this.props.visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
                <Menu.Item as='button'
                    onClick={() => this.setVisible(false)}
                >
                    <Icon name="home">
                        Hide
                    </Icon>
                </Menu.Item>
            </Sidebar>
        </Sidebar.Pushable >
    }
}

export default MySidebar;
