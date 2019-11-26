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
                        <Text note>Hoe gaat het met je zus. - 3:43 pm</Text>
                    </Body>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={require('../assets/avatars/avatar2.jpg')} />
                    </Left>
                    <Body>
                        <Text>Doge</Text>
                        <Text note>Such wow, much amaze. - 3:43 pm</Text>
                    </Body>
                </ListItem>
            </List>

        );
    }
}