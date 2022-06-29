import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import EnterCodeScreen from '../Screens/EnterCodeScreen';
import ForgotPwdScreen from '../Screens/ForgotPwdScreen';
import JoinSignUpScreen from '../Screens/JoinSignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function StackComponent() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sign Up" component={JoinSignUpScreen} />
      <Stack.Screen name="Log In" component={LoginScreen} />
      <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
      <Stack.Screen name="Forget Password" component={ForgotPwdScreen} />
      <Stack.Screen name="My Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default StackComponent