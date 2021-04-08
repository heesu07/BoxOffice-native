import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoxOffice from '../pages/BoxOffice';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const BoxOfficeNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="BoxOffice" 
          component={BoxOffice} 
          />
        <Stack.Screen 
          name="Detail" 
          component={Detail}
           />
      </Stack.Navigator>
  )
}

export default BoxOfficeNavigator;