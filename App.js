import { View, Text } from 'react-native'
import React from 'react'
import WelcomeSection from './Screens/WelcomeSection'
import App_navigation from './Navigation/App_navigation'
import ConversationScreen from './Screens/ConversationScreen'
import LoginScreen1 from './Screens/LoginScreen1'
import ConversationListScreen from './Screens/ConversationListScreen'

const App = () => {
  return (
    <App_navigation></App_navigation>
    // <ConversationScreen></ConversationScreen>

    // <ConversationListScreen></ConversationListScreen>

    // <ConversationListScreen></ConversationListScreen>
    // <View>
    //   <Text>Hello World</Text>
    // </View>
  )
}

export default App