import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class NavFooter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name='home' />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}
