import React from 'react';
import {Button, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BoxOfficeNavigator from './BoxOfficeNavigator';
import SearchNavigator from './SearchNavigator';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const AppNavigator = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="BoxOfficeNavigator" 
          component={BoxOfficeNavigator} 
          options={{drawerLabel: 'BoxOffice'}}  
        />
        <Drawer.Screen 
          name="SearchNavigator" 
          component={SearchNavigator} 
          options={{drawerLabel: 'Search movie'}}  
        />
        
    </Drawer.Navigator>
  )
}

export default AppNavigator;