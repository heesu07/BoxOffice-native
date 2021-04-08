import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/Search';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const SearchNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Search" 
          component={Search} 
          />
        <Stack.Screen 
          name="Detail" 
          component={Detail}
           />
      </Stack.Navigator>
  )
}

export default SearchNavigator;