import React from 'react'
import { Button, View } from 'react-native';
function JoinSignUpScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Join/Sign Up Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default JoinSignUpScreen