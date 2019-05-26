import React, { Component } from 'react';

import { View, Text, StatusBar } from 'react-native';

import {
    Container,
} from './styles';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container>
                <StatusBar hidden />
                <Text>Começando o projeto </Text>
            </Container>
        )
    }
}