import { Text, View } from 'react-native'
import React, { Component } from 'react'
import WelcomeScreen from './Screens/WelcomeScreen'
import LoginScreen1 from './Screens/LoginScreen1'
import SignUpScreen from './Screens/SignUpScreen'


export class App extends Component {
  render() {
    return (
      <View className="flex-1 justify-center items-center">
        {/* <WelcomeScreen></WelcomeScreen> */}
        <LoginScreen1></LoginScreen1>
        {/* <SignUpScreen></SignUpScreen> */}

      </View>
    )
  }
}

export default App