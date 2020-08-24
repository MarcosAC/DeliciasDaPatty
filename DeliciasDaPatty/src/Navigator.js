import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen';
import Detail from './components/Detail';
import MainPage from './pages/MainPage';
import ListSobremesas from './pages/ListSobremesas';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='MainPage' screenOptions={{ headerShown: false }}> 
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='MainPage' component={MainPage} screenOptions={{ headerShown: false }} />  
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='ListSobremesas' component={ListSobremesas} />
    </Stack.Navigator>
  );
};

const SplashRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default Routes;