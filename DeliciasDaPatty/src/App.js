import React, { Component } from 'react';
//import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './Navigator';
//import Carrossel from './components/Carrossel';

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}

{/* <NavigationContainer>
        <Navigator />
      </NavigationContainer> */}   