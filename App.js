import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackComponent from './Components/Stack';
import DrawerComponent from './Components/Drawer';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <DrawerComponent />
    </NavigationContainer>
    </>
    
  );
}