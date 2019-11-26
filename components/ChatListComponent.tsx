import React, { Component } from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ChatListComponent extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={require('../assets/avatars/avatar1.jpg')} />
                    </Left>
                    <Body>
                        <Text>Opa Henk</Text>
                        <Text note>Hoe gaat het met je zus.</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={require('../assets/avatars/avatar1.jpg')} />
                    </Left>
                    <Body>
                        <Text>Opa Henk</Text>
                        <Text note>Hoe gaat het met je zus.</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
            </List>

        );
    }
}