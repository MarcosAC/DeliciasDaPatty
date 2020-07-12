import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native';

import Card from '../components/Card';

class MainPage extends Component {
  render () {
    return (
      <View>
        <Text style={styles.title}>Delicias da Patty</Text>
        <Text style={styles.subTitle}>Descubra as delicias!</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#FB8A7A' }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
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
  }
});

export default MainPage;