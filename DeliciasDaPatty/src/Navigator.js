import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/MainPage';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName='MainPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainPage' component={MainPage} />  
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default Navigator;