import React, { Component } from 'react';
import { View } from 'react-native';

import ListSobremesas from './pages/ListSobremesas';
import Navigator from './Navigator';

export default class App extends Component {
  render() {
    return(
      <View>
        <ListSobremesas />
      </View>
    );
  }
}
