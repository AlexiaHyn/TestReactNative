import React from 'react'
import { View } from 'react-native';
import { Text, Card, Icon, Input, Button } from '@rneui/themed';
import styleAH from '../Style/styleAH.js';
import DropdownComponent from '../Components/Dropdown.js';

function JoinSignUpScreen({ navigation: { navigate } }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  function onSignUp(e){
    alert("SignUp Screen")
  }
  return (
    <View style={[styleAH.verticalCenter, styleAH.bgWhite]}>
        <Card containerStyle={styleAH.removeCardBorder}>
          
          <View style={styleAH.flexRowBtw}>
            <Text onPress={()=>{navigate("Log In")}} style={[styleAH.fontBold, styleAH.txtLight]} h1>Login</Text>
            <Text style={[styleAH.fontBold]} h1>Sign Up</Text>
          </View>
          <Text style={styleAH.my2}> Please sign up to continue. </Text>
          <Card.Divider></Card.Divider>

          <View style={styleAH.px2}>
            <Text>Email</Text>
            <Input
              placeholder='email'
              leftIcon={{ type: 'entypo', name: 'mail' }}
              value={email}
              onChangeText={(e)=>{setEmail(e.value)}}
            />

            <Text>Password</Text>
            <Input
              placeholder='password'
              leftIcon={{ type: 'entypo', name: 'key' }}
              value={password}
              onChangeText={(e)=>{setPassword(e.value)}}
            />
            
            <Text>Type</Text>
            <DropdownComponent data={data}/>
          </View>

          <Button
            onPress={onSignUp}
            title="Sign Up"
            buttonStyle={[styleAH.bgDark, styleAH.rounded, styleAH.my2]}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 0,
            }}
            titleStyle={{ color: 'white', marginHorizontal: 20 }}
          />

          <Text onPress={()=>{navigate("Log In")}} style={[styleAH.txtGrey]} >Already have an account? Click here to log in.</Text>
        </Card>

        
    </View>
  )
}

export default JoinSignUpScreen