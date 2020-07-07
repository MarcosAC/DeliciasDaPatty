import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

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
