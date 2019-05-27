import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps'



export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (

            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    loadingEnabled={true}
                    region={{
                        latitude: -30.036814,
                        longitude: -51.216607,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                </MapView>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },

    map: {

        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },

});