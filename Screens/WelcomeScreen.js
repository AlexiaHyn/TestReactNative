import React from 'react'
import { View } from 'react-native';
import { Text, Card, Button, Icon, Input } from '@rneui/themed';

function WelcomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Welcome </Text>
    <Button
      title="Login"
      onPress={() => navigate('Log In')}
    />
    <Button
        title="Sign Up"
        onPress={() => navigate('Sign Up')}
    />
  </View>
  )
}

export default WelcomeScreen