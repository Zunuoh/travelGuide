import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/mainStack';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './src/login/login';
import Easternpage from './src/feed/regions/easternScreen';
import SignupScreen from './src/login/signup';
import Feedpage from './src/feed/feed';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="auth" component={AuthStackNavigator} /> */}
        <Stack.Screen name="core" component={MainStackNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
