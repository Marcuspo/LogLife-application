import React, { useRef, useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/Login/index';
import { Home } from '../pages/Home';
import { Collect } from '../pages/Collections';
import { MakeCollect } from '../pages/MakeCollect';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const hasToken = useRef(false);

  const getUserToken = useCallback(async () => {
    try {
      const userIdAsync = await AsyncStorage.getItem('@loglife::id_user');
      if (userIdAsync) {
        hasToken.current = true;
      } else {
        hasToken.current = false;
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ hasToken }}
        />
        <Stack.Screen name="Collect" component={Collect} />
        <Stack.Screen name="MakeCollect" component={MakeCollect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
