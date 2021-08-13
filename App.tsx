import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import { LateralMenu } from './src/navigator/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;