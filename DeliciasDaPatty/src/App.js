import React, { Component } from 'react';
//import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './Navigator';
//import SplashScreen from './components/SplashScreen';

export default class App extends Component {
  render() {
    return(      
      <NavigationContainer>
        {/*<SplashScreen />*/}
        <Navigator />
      </NavigationContainer>
    );
  }
}

{/* <NavigationContainer>
        <Navigator />
      </NavigationContainer> */}   