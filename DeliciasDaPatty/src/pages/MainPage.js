import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Card from '../components/Card';

function MainPage({ navigation }) {
  return (
    <View style={styles.container}>        
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Delicias da Patty</Text>
        <Text style={styles.subTitle}>Descubra as delicias!</Text>
      </View>

      <View style={styles.containerCards}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.categorias}>Sobremesas</Text>
          <Text style={styles.categorias}>Bolos</Text>
          <Text style={styles.categorias}>Bombom aberto</Text>
          <Text style={styles.categorias}>Delicias!</Text>
          <Text style={styles.categorias}>Delicias!</Text>
        </ScrollView>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card screenName='Detail' />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>

      <View style={styles.mainContainerMenuBottom}>
        <View style={styles.backgroundMenuBottom}>
          <View style={styles.containerMenuBottom}>

            <View style={styles.menuBottom}>
              <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                    <View style={styles.buttonDelicias}>
                      <View style={styles.iconButton}>
                        <FontAwesome name="birthday-cake" size={18} color="white" />
                      </View>
                    </View>
              </TouchableHighlight>
              <Text style={styles.textMenuBottom}>Delicias</Text>
            </View>

            <View style={styles.menuBottom}>
              <TouchableHighlight onPress={() => navigation.navigate('Detail')} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                  <View style={styles.buttonHome}>
                    <View style={styles.iconButton}>
                      <FontAwesome name="heart" size={22} color="white" />
                    </View>
                  </View>
              </TouchableHighlight>
            </View>

            <View style={styles.menuBottom}>
              <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ borderRadius: 60}} >
                  <View style={styles.buttonPedidos}>
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
}

const styles = StyleSheet.create({ 

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  containerTitle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingLeft: 15
  },
  
  containerCards: {
    width: '100%',
    backgroundColor: '#DEA9A5',    
    borderBottomLeftRadius: 40
  },

  mainContainerMenuBottom: {
    flex: 1,
    backgroundColor: '#DEA9A5'
  },

  containerMenuBottom: {
    flexDirection: 'row',
    alignItems: 'center'
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

  backgroundMenuBottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 40
  }, 

  menuBottom: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonHome: {
    backgroundColor: '#e05a5a',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white'
  },

  buttonDelicias: {
    backgroundColor: '#559057',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },

  buttonPedidos: {
    backgroundColor: '#DD9305',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white'
  },

  iconButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  

  textMenuBottom: {
    fontSize: 16,
    color: '#5C2D1E'
  }, 
});

export default MainPage;
