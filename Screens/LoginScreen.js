import React from 'react'
import { View} from 'react-native';
import { Text, Card, Button, Icon, Input } from '@rneui/themed';
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
            <Text h1>Login</Text>
            <Text> Please log in to continue. </Text>
          </View>
          
          <View style={{padding:10}}>
            <Text>Email</Text>
            <Input
              placeholder='email'
              leftIcon={{ type: 'entypo', name: 'mail' }}
            />

            <Text>Password</Text>
            <Input
              placeholder='password'
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