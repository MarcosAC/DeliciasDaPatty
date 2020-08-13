import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Linking } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Card from '../components/Card';

const CARDS = [
  {id: 1, card: <Card screenName='Detail' />},
  {id: 2, card: <Card screenName='Detail' />},
  {id: 3, card: <Card screenName='Detail' />},
  {id: 4, card: <Card screenName='Detail' />}
];

function MainPage({ navigation }) { 
  return (    
    <View style={styles.container}>        
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Delicias da Patty</Text>
        <Text style={styles.subTitle}>Descubra as delicias!</Text>
      </View>

      <View style={styles.containerCards}>
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={CARDS}
          keyExtractor={i => `${i.id}`}
          renderItem={({ item:p }) => {
            return p.card
          }}
        />
      </View>

      <View style={styles.mainContainerMenuBottom}>
        <View style={styles.backgroundMenuBottom}>
          <View style={styles.containerMenuBottom}>

            <View style={styles.menuBottom}>
              <TouchableHighlight onPress={() => navigation.navigate('ListSobremesas')} underlayColor={'#FDE1DF'} style={styles.menuBottomTouchable} >
                    <View style={styles.buttonDelicias}>
                      <View style={styles.iconButton}>
                        <FontAwesome name="birthday-cake" size={18} color="white" />
                      </View>
                    </View>
              </TouchableHighlight>
              <Text style={styles.textMenuBottom}>Delicias</Text>
            </View>

            {/* <View style={styles.menuBottom}>
              <TouchableHighlight onPress={() => navigation.navigate('Detail')} underlayColor={'#FDE1DF'} style={styles.menuBottomTouchable} >
                  <View style={styles.buttonHome}>
                    <View style={styles.iconButton}>
                      <FontAwesome name="heart" size={22} color="white" />
                    </View>
                  </View>
              </TouchableHighlight>
            </View> */}

            <View style={styles.menuBottom}>
              <TouchableHighlight 
                style={styles.menuBottomTouchable}
                underlayColor={'#FDE1DF'}
                onPress={() => {
                  Linking.openURL('http://api.whatsapp.com/send?phone=5531999999999');
                }}>
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
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
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
    marginTop: 10
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

  categories: {
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

  menuBottomTouchable: { 
    borderRadius: 60
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
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },

  buttonPedidos: {
    backgroundColor: '#DD9305',
    height: 70,
    width: 70,
    borderRadius: 35,
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
