import React from 'react';
import {DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BoxOfficeNavigator from './navigators/BoxOfficeNavigator';
import AppNavigator from './navigators/AppNavigator';

const Theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={Theme} >
      
        <AppNavigator />

        
      
    </NavigationContainer>
  )
};

export default App;
