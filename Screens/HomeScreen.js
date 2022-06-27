import React from 'react'
import { Button, View } from 'react-native';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("Home Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default HomeScreen