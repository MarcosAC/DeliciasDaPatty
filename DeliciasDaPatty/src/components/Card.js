import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Card extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Image style={styles.viewImage} source={require('../../assets/imgs/img_bolo.jpg')} />

        <View style={styles.descriptionCard}> 

          <Text style={styles.textCard}>Bolo de Chocolate</Text>          
          <TouchableHighlight onPress={() => ({})} underlayColor={'#FDE1DF'} style={{ flex: 1, borderRadius: 60}} >
            <View style={styles.button}>
              <View style={styles.iconButton}>
                <Icon name="heart" size={18} color="white" />
              </View>
            </View>
          </TouchableHighlight> 

        </View>

      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 30,
    borderRadius: 20,
    shadowColor: "#A0A0A0",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,    
    elevation: 20,
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
    fontSize: 19,
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

  iconButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },  
});

export default Card; 