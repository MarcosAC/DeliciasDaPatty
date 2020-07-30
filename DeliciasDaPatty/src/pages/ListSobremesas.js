import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DATA = [
    {
        id: 1,
        name: "Bolo de Chocolate",
        price: "R$ 45,00"
    },
    {
        id: 2,
        name: "Bombom Aberto",
        price: "R$ 7,00"
    },
    {
        id: 3,
        name: "Bolo Piscina com Nutella",
        price: "R$ 45,00"
    },
    {
        id: 4,
        name: "Pavê de Leite Ninho com Morango",
        price: "R$ 7,00"
    },
    {
        id: 5,
        name: "Romeu e Julieta",
        price: "R$ 6,50"
    },
    {
        id: 6,
        name: "Bolo de Pote de Chocolate e Morango",
        price: "R$ 7,00"
    },
    {
        id: 7,
        name: "Bolo de Pote de Brigadeiro",
        price: "R$ 7,00"
    },
    {
        id: 8,
        name: "Bolo de Chocolate",
        price: "R$ 7,00"
    },
    {
        id: 9,
        name: "Bolo de Chocolate",
        price: "R$ 7,00"
    },
    {
        id: 10,
        name: "Bolo de Chocolate",
        price: "R$ 7,00"
    },
  ];

const renderItem = ({ item: s }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/imgs/img_bolo.jpg')} />

            <View style={styles.containerText}>
                <Text style={styles.text}>{s.name}</Text>
                <Text style={styles.text}>{s.price}</Text>
            </View>
        </View>
    );
};
  
function ListSobremesas() {    
    return (
        <FlatList
          data={DATA}
          keyExtractor={i => `${i.id}`}
          renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },

    image: {
        flex: 1,
        height: '100%',
        borderRadius: 20
    },

    containerText: {
        flex: 2,
        padding: 15
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5C2D1E'
    },
});

 export default ListSobremesas;