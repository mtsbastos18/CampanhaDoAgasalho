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
        markers: [{title: 'DEMHAB',  address: 'Av. Princesa Isabel, 1115- Santana', lat: -30.045653,long: -51.203135},
        {title: 'PREVIMPA',  address: 'Rua Uruguai, 277 , 5º andar - Centro Histórico', lat: -30.029097,long:  -51.228722},
        {title: 'FASC',  address: 'Av. Ipiranga, 310- Praia de Belas', lat: -30.047703,long:  -51.225378 },
        {title: 'AMRIGS',  address: 'Av. Ipiranga,5311- Partenon', lat: -30.058015,long:  -51.186086},
        {title: 'PROCON',  address: 'Rua dos Andradas,686 - Centro Histórico', lat: -30.031595,long: -51.234848},
        {title: 'Edificio José Montaury',  address: 'Siqueira Campos 1300- Centro', lat: -30.027738,long: -51.228825},
        {title: 'AMOBELA',  address: 'Av. Dr. Nilo Peçanha 1250 – Boa Vista', lat: -30.028976,long: -51.1795715},
        {title: 'Shopping João Pessoa',  address: 'Av. João Pessoa, 1831 – Farroupilha', lat: -30.045614,long: -51.213088},
        {title: 'Shopping Total',  address: 'Av. Cristóvão Colombo, 545 – Floresta', lat: -30.026220,long: -51.212054},
        {title: 'Barra Shopping Sul',  address: 'Av. Diário de Notícias, 300 –Cristal', lat:-30.084376,long: -51.247160},
        ]
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
                    {this.state.markers.map(marker => (
                        <Marker
                        coordinate={{
                            latitude: marker.lat, longitude: marker.long
                        }}
                        title={marker.title}
                        description={marker.description}
                      />
                    ))}
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