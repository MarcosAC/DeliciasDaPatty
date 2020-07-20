import React, { Component } from 'react';
import { View } from 'react-native';

import MainPage from './pages/MainPage';
import Detail from './pages/Detail';

export default class App extends Component {
  render() {
    return(
      <View>
        <Detail />
      </View>
    );
  }
}
