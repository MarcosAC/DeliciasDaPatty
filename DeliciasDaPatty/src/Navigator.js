import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/MainPage';
import Detail from './pages/Detail';
import ListSobremesas from './pages/ListSobremesas';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='MainPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainPage' component={MainPage} />  
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='ListSobremesas' component={ListSobremesas} />
    </Stack.Navigator>
  );
};

export default Routes;