import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight, Image, FlatList } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/Card';

function MainPage ({ navigation }) {
  //render() {
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>        
        <View style={{ height: '15%', width: '100%', paddingLeft: 15 }}>
          <Text style={styles.title}>Delicias da Patty</Text>
          <Text style={styles.subTitle}>Descubra as delicias!</Text>
        </View>

        <View  style={{ height: '70%', width: '100%', backgroundColor: '#DEA9A5', borderBottomLeftRadius: 40 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Text style={styles.categorias}>Sobremesas</Text>
              <Text style={styles.categorias}>Bolos</Text>
              <Text style={styles.categorias}>Bombom aberto</Text>
              <Text style={styles.categorias}>Delicias!</Text>
              <Text style={styles.categorias}>Delicias!</Text>
            </ScrollView>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              <Card />
              <Card />
              <Card />
              <Card />
          </ScrollView>
        </View>

        <View style={{ backgroundColor: '#DEA9A5', height: '15%', width: '100%' }}>
          <View style={{ backgroundColor: 'white', borderTopRightRadius: 40, height: '100%', width: '100%' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%', alignItems:'center' }}>
              <View style={styles.menuBottom}>
                <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                      <View style={styles.button1}>
                        <View style={styles.iconButton}>
                          <FontAwesome name="birthday-cake" size={18} color="white" />
                        </View>
                      </View>
                  </TouchableHighlight>
                  <Text style={styles.textMenuBottom}>Delicias</Text>
              </View>

              <View style={styles.menuBottom}>
                <TouchableHighlight onPress={() => navigation.navigate('Detail')} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                    <View style={styles.button}>
                      <View style={styles.iconButton}>
                        <FontAwesome name="heart" size={26} color="white" />
                      </View>
                    </View>
                </TouchableHighlight>
              </View>

              <View style={styles.menuBottom}>
                <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                    <View style={styles.button2}>
                      <View style={styles.iconButton}>
                        <FontAwesome5 name="comments" size={18} color="white" />
                      </View>
                    </View>
                </TouchableHighlight>
                <Text style={styles.textMenuBottom}>Pedidos</Text>
              </View>
            </View>            
          </View>

        </View>
      </View>
    );
  //}
}

const styles = StyleSheet.create({ 

  conatiner: {
    flex: 1
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

  categorias: {
    fontSize: 16, 
    color: '#5C2D1E',
    margin: 10
  },

  textMenuBottom: {
    fontSize: 16,
     color: '#5C2D1E'
  },

  button: {
    backgroundColor: '#e05a5a',
    height: 80,
    width: 80,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white'
  },

  button1: {
    backgroundColor: '#559057',
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white'
  },

  button2: {
    backgroundColor: '#DD9305',
    height: 60,
    width: 60,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white'
  },

  menuBottom: {
    alignItems: 'center'
  },

  iconButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },  
});

export default MainPage;