import { View, Text } from 'react-native'
import React from 'react'
import WelcomeSection from './Screens/WelcomeSection'
import App_navigation from './Navigation/App_navigation'
import ConversationScreen from './Screens/ConversationScreen'

const App = () => {
  return (
    // <App_navigation></App_navigation>
    <ConversationScreen></ConversationScreen>
  )
}

export default App