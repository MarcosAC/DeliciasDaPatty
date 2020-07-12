import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native';

import Card from '../components/Card';

class MainPage extends Component {
  render () {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  

  card: {
    borderRadius: 20,
    shadowColor: '#DCDCDC',
    backgroundColor: '#FF6961',
    height: 300,
    width: 250
  }
});

export default MainPage;