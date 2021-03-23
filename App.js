import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/login/login';
import ProfileScreen from './src/profile/profile';
import SignupScreen from './src/login/signup';
import Feedpage from './src/feed/feed';

export default function App() {
  return (
    // <SignupScreen/>
//  <LoginScreen/>
  // <ProfileScreen/>
  <Feedpage/>
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
