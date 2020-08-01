import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DATA = [
    {
        id: 1,
        sobremesa: "Bolo de Chocolate",
        valor: "R$ 45,00"
    },
    {
        id: 2,
        sobremesa: "Bombom Aberto",
        valor: "R$ 7,00"
    },
    {
        id: 3,
        sobremesa: "Bolo Piscina com Nutella",
        valor: "R$ 45,00"
    },
    {
        id: 4,
        sobremesa: "Pavê de Leite Ninho com Morango",
        valor: "R$ 7,00"
    },
    {
        id: 5,
        sobremesa: "Romeu e Julieta",
        valor: "R$ 6,50"
    },
    {
        id: 6,
        sobremesa: "Bolo de Pote de Chocolate e Morango",
        valor: "R$ 7,00"
    },
    {
        id: 7,
        sobremesa: "Bolo de Pote de Brigadeiro",
        valor: "R$ 7,00"
    },
    {
        id: 8,
        sobremesa: "Bolo de Chocolate",
        valor: "R$ 7,00"
    },
    {
        id: 9,
        sobremesa: "Bolo de Chocolate",
        valor: "R$ 7,00"
    },
    {
        id: 10,
        sobremesa: "Bolo de Chocolate",
        valor: "R$ 7,00"
    },
  ];

const renderItem = ({ item: s }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../../assets/imgs/img_bolo.jpg')} />
            </View>  
            <View style={styles.containerText}>                
                <Text style={styles.textSobremesa}>{s.sobremesa}</Text>                
                <Text style={styles.textValor}>{s.valor}</Text>                               
            </View> 
        </View> 
    );
};

function ListSobremesas() {    
    return (
        <>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Delicias da Patty</Text>
                <Text style={styles.subTitle}>Descubra as delicias!</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                keyExtractor={i => `${i.id}`}
                renderItem={renderItem}
            />
        </>
    );
};

const styles = StyleSheet.create({
    containerTitle: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 15
      },

    title: {
      fontFamily: 'Cream Cake',
      fontSize: 48,
      color: '#5C2D1E'
    },

    subTitle: {
      fontFamily: 'Cream Cake',
      fontSize: 32,
      color: '#5C2D1E',
    },

    container: {
        flexDirection: "row",
        padding: 10,     
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#DEA9A5',
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 6,
    },

    containerImage: {
        flex: 1,
    },

    image: { 
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#FFFFFF',
        borderWidth: 2},

    containerText: { 
        flex: 2,
        marginLeft: 10,
        justifyContent: 'center',
    },

    textSobremesa: { 
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5C2D1E'
    },

    textValor: { 
        fontSize: 22,
        fontWeight: 'bold',
        color: '#5C2D1E'
    }
});

 export default ListSobremesas;