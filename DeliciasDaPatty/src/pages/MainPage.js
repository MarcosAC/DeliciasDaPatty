import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native';

import Card from '../components/Card';

class MainPage extends Component {
  render () {
    return (
      <View>
        <Text style={styles.title}>Delicias da Patty</Text>
        <Text style={styles.subTitle}>Descubra as delicias!</Text>

        <View style={{ backgroundColor: '#DEA9A5' }}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({ 

  title: {
    fontSize: 36,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#5C2D1E'
  },

  subTitle: {
    fontSize: 24,    
    marginLeft: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#5C2D1E'
  },

  categorias: {
    fontSize: 18, 
    color: '#5C2D1E',
    margin: 15
  },
});

export default MainPage;