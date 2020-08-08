import React, { Component } from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './Navigator';
import Carousel from './components/Carousel';

export default class App extends Component {
  render() {
    return(
      <Carousel />
    );
  }
}

{/* <NavigationContainer>
        <Navigator />
      </NavigationContainer> */}   