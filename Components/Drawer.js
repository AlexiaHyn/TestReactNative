import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import AnotherScreen from '../Screens/AnotherScreen';

const Drawer = createDrawerNavigator();

function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Another" component={AnotherScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerComponent