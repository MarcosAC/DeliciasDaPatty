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
            <View style={{ flex: 1,
                           alignItems: 'center',
                           borderColor: 'black',
                           //borderWidth: 1,
                           width: 100,
                           height: 100 }}>

                <Image style={styles.image} source={require('../../assets/imgs/img_bolo.jpg')} />

            </View>
            {/* <Image style={styles.image} source={require('../../assets/imgs/img_bolo.jpg')} /> */}

            <View style={styles.containerText}>
                <Text style={styles.text}>{s.name}</Text>
                <Text style={styles.text}>{s.price}</Text>
                {/* <View style={{ borderWidth: 1, borderColor: 'white', marginTop: 10 }}>
                    <Text style={styles.text}>{s.name}</Text>
                    
                </View>

                <View style={{ borderWidth: 1, borderColor: 'blue' }}>
                    
                    <Text style={styles.text}>{s.price}</Text>
                </View> */}
                
            </View>
        </View>
    );
};

 /* <FlatList
          data={DATA}
          keyExtractor={i => `${i.id}`}
          renderItem={renderItem}
        /> */
  
function ListSobremesas() {    
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require('../../assets/imgs/img_bolo.jpg')} /> */}
        </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        //marginVertical: 8,
        //marginHorizontal: 16,
        //padding: 10,
        borderRadius: 15,/* 
        shadowColor: "#A0A0A0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,    
        elevation: 5, */
        backgroundColor: '#DEA9A5',
        borderColor: 'black',
        borderWidth: 2,
        height: 300,
        width: 40
    },

    image: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: 2,
    },

    containerText: {
        flex: 2,
        flexDirection: 'column',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
        marginLeft: 10,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5C2D1E'
    },
});

 export default ListSobremesas;