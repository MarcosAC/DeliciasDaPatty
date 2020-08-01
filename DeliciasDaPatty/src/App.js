import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './Navigator';

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>      
    );
  }
}