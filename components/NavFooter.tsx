import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class NavFooter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button active transparent>
                            <Icon name='chatboxes' />
                            <Text>All Chats</Text>
                        </Button>
                        <Button transparent>
                            <Icon name='md-people' />
                            <Text>Groups Chats</Text>
                        </Button>
                        <Button transparent>
                            <Icon name='camera' />
                            <Text>QR Scanner</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}
