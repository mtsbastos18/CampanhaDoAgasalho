import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import {
    Container,
    Logo,
    Input,
    Button,
    ButtonText
} from './styles';

export default class Home extends Component {
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    handlePontosDeColeta = () => {
        this.props.navigation.navigate('Main');
    };

    handleFiltro = () => {
        this.props.navigation.navigate('Camera');
    };

    render() {
        return (

            <Container>
                <Logo source={require('../../images/logo2.png')} resizeMode="contain" />
                <Button>
                    <ButtonText onPress={this.handlePontosDeColeta}>Pontos de coleta</ButtonText>
                </Button>
                <Button>
                    <ButtonText onPress={this.handleFiltro}>Compartilhar filtro</ButtonText>
                </Button>
            </Container>
        );
    }
}