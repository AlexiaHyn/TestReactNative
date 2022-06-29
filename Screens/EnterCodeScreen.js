import React from 'react'
import { Button, View } from 'react-native';
function EnterCodeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Enter Code Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default EnterCodeScreen