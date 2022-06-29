import React from 'react'
import { Button, View, Text } from 'react-native';
import styleAH from '../Style/styleAH.js';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <>
      <View style={styleAH.center}>
        <Text>Home</Text>
        <Button
            title="Login"
            onPress={() => navigate('Log In')}
        />
      </View>
    </>
   
  )
}

export default HomeScreen