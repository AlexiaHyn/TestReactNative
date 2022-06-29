import React from 'react'
import { Button, View } from 'react-native';
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => alert("My Profile Screen")}
      title="Where Am I"
    />
  </View>
  )
}

export default ProfileScreen