import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.containerPhoto}>
          <Image style={styles.photo} source={require('../../assets/imgs/img_bolo.jpg')} />
        </View>
        
        <View style={styles.containerDescription}>
          <View style={styles.containerTex}>
            <Text style={styles.textDescription}>Bolo de Chocolate</Text>            
          </View>

          <TouchableHighlight style={styles.containerButtom}>
            <View style={styles.buttom}>
              <Icon name="heart" size={24} color="white" />
            </View>
          </TouchableHighlight>          
        </View>

       <View style={styles.containerDetails}>
         <View style={{ flex:2, backgroundColor: '#FFFFFF', borderTopRightRadius: 40}}>
            <View style={{ backgroundColor: '#FFFFFF',  }}></View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF'
  },

  containerPhoto: {
    flex:3,
    backgroundColor: '#DEA9A5'
  },

  photo: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 40
  },

  containerDescription: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'transparent',  
    backgroundColor: '#DEA9A5', 
    borderBottomLeftRadius: 40   
  },
  
  containerTex: {
    flex:3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '5%'
  },

  containerButtom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '5%'
  },

  buttom: {
    justifyContent: 'center', 
    alignItems: 'center',
    height: 70,
    width: 70, 
    borderRadius: 35,    
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#E05A5A'
  },

  textDescription: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5C2D1E',
  },

  containerDetails: {
    flex:2, 
    backgroundColor: '#DEA9A5'
  },
});

export default Detail;
