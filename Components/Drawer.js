import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import EnterCodeScreen from '../Screens/EnterCodeScreen';
import ForgotPwdScreen from '../Screens/ForgotPwdScreen';
import JoinSignUpScreen from '../Screens/JoinSignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Sign Up" component={JoinSignUpScreen} />
      <Drawer.Screen name="Log In" component={LoginScreen} />
      <Drawer.Screen name="EnterCode" component={EnterCodeScreen} />
      <Drawer.Screen name="Forget Password" component={ForgotPwdScreen} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerComponent