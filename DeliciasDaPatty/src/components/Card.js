import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Card({ screenName }) {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image style={styles.viewImage} source={require('../../assets/imgs/img_bolo.jpg')} />

        <View style={styles.descriptionCard}>
          <Text style={styles.textCard}>Bolo de Chocolate</Text>

          <View style={styles.containerButton}>
            <TouchableHighlight onPress={() => navigation.navigate(screenName)} underlayColor={'#FDE1DF'} style={styles.TouchableCard} >
              <View style={styles.button}>
                <View style={styles.iconButton}>
                  <Icon name="heart" size={14} color="white" />
                </View>
              </View>            
            </TouchableHighlight>
            <Text style={styles.textButton}>Detalhes</Text>
          </View>

          {/* <View style={styles.descriptionCard}>
            <Text style={styles.textCard}>Bolo de Chocolate</Text>   

            <TouchableHighlight onPress={() => navigation.navigate(screenName)} underlayColor={'#FDE1DF'} style={styles.TouchableCard} >
                <View style={styles.button}>
                  <View style={styles.iconButton}>
                    <Icon name="heart" size={18} color="white" />
                  </View>
                </View>            
              </TouchableHighlight>  
          </View> */}
        </View>         
      </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 30,
    borderRadius: 20,
    shadowColor: "#A0A0A0",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,    
    elevation: 12,
    backgroundColor: '#DEA9A5',
    height: 350,
    width: 250,
  },

  viewImage: {
    resizeMode: 'stretch',
    height: 270,
    width: 250,
    borderTopLeftRadius: 9,
    borderTopRightRadius:9,
    borderBottomRightRadius: 12,    
    borderBottomLeftRadius: 0
  },

  textCard: {
    flex: 4,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#5C2D1E',
  },

  descriptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
    /*flexDirection: 'row',
    marginTop: 5,
    padding: 5,
    alignItems: 'center',*/
  },

  menuBottom: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerButton: {
    flex: 2,
    alignItems: 'center'
  },

  TouchableCard: { 
    //flex: 1, 
    borderRadius: 40,
  },

  button: {
    backgroundColor: '#E05A5A',
    height: 50,
    width: 50,
    borderRadius: 25,    
    borderWidth: 2,
    borderColor: 'white'
  },

  iconButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },  

  textButton: {
    fontSize: 12,
    color: '#5C2D1E',
    fontWeight: 'bold'
  }
});

export default Card; 