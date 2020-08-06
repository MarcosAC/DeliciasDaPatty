import React, { Component } from 'react';
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