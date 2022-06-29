import React from 'react'
import { Button, View } from 'react-native';
function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Welcome Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default WelcomeScreen