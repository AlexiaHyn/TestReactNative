import React from 'react'
import { Button, View } from 'react-native';
function AnotherScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Another Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default AnotherScreen