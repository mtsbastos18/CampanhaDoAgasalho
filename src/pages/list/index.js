import React, { Component } from 'react';

import { View, StyleSheet, Text, FlatList } from 'react-native';


export default class List extends Component {
    static navigationOptions = {
        title: 'Lista dos pontos',
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
        docs: [{ title: 'DEMHAB', address: 'Av. Princesa Isabel, 1115 - Santana' },
        { title: 'PREVIMPA', address: 'Rua Uruguai, 277 , 5º andar - Centro Histórico' },
        { title: 'FASC', address: 'Av. Ipiranga, 310 - Praia de Belas' },
        { title: 'AMRIGS', address: 'Av. Ipiranga,5311 - Partenon' },
        { title: 'PROCON', address: 'Rua dos Andradas,686 - Centro Histórico' },
        { title: 'Edificio José Montaury', address: 'Siqueira Campos 1300 - Centro' },
        { title: 'AMOBELA', address: 'Av. Dr. Nilo Peçanha 1250 – Boa Vista' },
        { title: 'Shopping João Pessoa', address: 'Av. João Pessoa, 1831 – Farroupilha' },]
    };

    renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemContent}>{item.address}</Text>
        </View>
    )

    render() {
        return (

            <View styles={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    renderItem={this.renderItem}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },

    list: {
        padding: 20
    },

    itemContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },

    
});
