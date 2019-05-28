import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { PermissionsAndroid } from 'react-native';

import {
    Container,
    Titulo,
    Logo
} from './styles';


export default class Main extends Component {
    static navigationOptions = {
        title: 'Pontos de coleta',
        headerStyle: {
          backgroundColor: '#eeee',
        },
        headerTintColor: '#ff4500',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'right',
        },
      };
    

    state = {
        origin: { latitude: -30.036814, longitude: -51.216607 },
    };

    async requestLocationPermission() {
        try {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'App Location Permission',
                    'message': 'Maps App needs access to your map ' +
                        'so you can be navigated.'
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
                return true;

            } else {
                console.log("location permission denied");
                return false;
            }

        } catch (err) {
            console.warn(err)
        }

    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            console.log('new origin');
            console.log(newOrigin);

            this.setState({
                origin: newOrigin
            });
        }, (err) => {
            console.log('error');
            console.log(err)

        }, { enableHighAccuracy: false, timeout: 2000 })

    };

    async componentDidMount() {
        let isGranted = await this.requestLocationPermission();

        if (isGranted) {
            this.getLocation();
        }

        this.getLocation();
    }


    render() {
        return (

            <Container>
                {/* <Logo source={require('../../images/logo2.png')} resizeMode="contain" /> */}

                <MapView
                    style={[styles.map]}
                    loadingEnabled={true}
                    region={{
                        latitude: this.state.origin.latitude,
                        longitude: this.state.origin.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                >
                    <Marker title={"Sua Localização"}
                        pinColor={"#58afd0"}
                        coordinate={{
                            latitude: -30.036814, longitude: -51.216607
                        }}>
                    </Marker>
                </MapView>

            </Container>

        );
    }
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0

    },
});