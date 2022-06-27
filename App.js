import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerComponent from './Components/Drawer';










export default function App() {
  return (
    <NavigationContainer>
   <DrawerComponent />
  </NavigationContainer>
  );
}