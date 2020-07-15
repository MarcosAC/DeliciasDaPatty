import React, { Component } from 'react';
import { View } from 'react-native';

import MainPage from './pages/MainPage';

export default class App extends Component {
  render() {
    return(
      <View>
        <MainPage />
      </View>
    );
  }
}
