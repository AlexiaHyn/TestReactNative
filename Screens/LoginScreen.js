import React from 'react'
import { Button, View, TextInput, Text } from 'react-native';
import { Input, Icon } from '@rneui/themed';
import styleAH from '../Style/styleAH.js';

function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onLogIn(e){
    alert("Login Screen")
  }

  return (
    <View style={{padding:20}}>
        <View>
          <View>
            <Text>Email</Text>
            <Input
              placeholder='INPUT WITH ICON'
              leftIcon={{ type: 'entypo', name: 'mail' }}
            />

            <Text>Password</Text>
            <Input
              placeholder='INPUT WITH ICON'
              leftIcon={{ type: 'entypo', name: 'key' }}
            />
          </View>
        </View>

        <Button
          onPress={onLogIn}
          title="Log In"
        />
    </View>
  )
}

export default LoginScreen