import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LateralMenu } from './src/navigator/LateralMenu';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='white'/>
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App;