import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';

class Card extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Image style={styles.viewImage} source={require('../../assets/imgs/img_bolo.jpg')} />

        <View style={styles.descriptionCard}> 

          <Text style={styles.textCard}>Bolo de Choco</Text>          
          <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ flex: 1, borderRadius: 60}} >
            <View style={styles.button}></View>
          </TouchableHighlight> 

        </View>

      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    shadowColor: '#DCDCDC',
    backgroundColor: '#DEA9A5',
    height: 300,
    width: 250,
  },

  viewImage: {
    resizeMode: 'stretch',
    height: 220,
    width: 250,
    borderTopLeftRadius: 9,
    borderTopRightRadius:9,
    borderBottomRightRadius: 12,    
    borderBottomLeftRadius: 0
  },

  textCard: {
    flex: 3,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5C2D1E',
  },

  descriptionCard: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#e05a5a',
    height: 60,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white'
  },
});

export default Card; 