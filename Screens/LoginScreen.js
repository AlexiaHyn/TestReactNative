import React from 'react'
import { View} from 'react-native';
import { Text, Card, Button, Icon, Input } from '@rneui/themed';
import styleAH from '../Style/styleAH.js';

function LoginScreen({ navigation: { navigate } }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onLogIn(e){
    alert("Login Screen")
  }

  return (
    <View style={[styleAH.verticalCenter, styleAH.bgWhite]}>
        <Card containerStyle={{borderWidth: 0, elevation: 0, 
          shadowColor: 'rgba(0,0,0, 0.0)',
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,}}>
          <View style={styleAH.flexRowBtw}>
            <Text style={[styleAH.fontBold]} h1>Login</Text>
            <Text onPress={()=>{navigate("Sign Up")}} style={[styleAH.fontBold, styleAH.txtLight]} h1>Sign Up</Text>
          </View>
          <Text style={styleAH.my2}> Please log in to continue. </Text>
          <Card.Divider></Card.Divider>
          <View style={styleAH.px2}>
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
            <Text onPress={()=>{navigate("Forget Password")}} style={[styleAH.my2, styleAH.txtGrey]} >Forgot Password?</Text>
          </View>
          
          <Button
            onPress={onLogIn}
            title="Log In"
            buttonStyle={[styleAH.bgDark, styleAH.rounded, styleAH.my2]}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 0,
            }}
            titleStyle={{ color: 'white', marginHorizontal: 20 }}
          />

          <Text onPress={()=>{navigate("Sign Up")}} style={[styleAH.txtGrey]} >Don't have an account? Click here to sign up.</Text>
        </Card>

        
    </View>
  )
}

export default LoginScreen