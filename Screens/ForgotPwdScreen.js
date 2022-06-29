import React from 'react'
import { Button, View } from 'react-native';
function ForgotPwdScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Forgot Password Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default ForgotPwdScreen