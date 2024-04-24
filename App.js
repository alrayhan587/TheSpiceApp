import { View, Text } from 'react-native'
import React from 'react'
import WelcomeSection from './Screens/WelcomeSection'
import App_navigation from './Navigation/App_navigation'
import ConversationScreen from './Screens/ConversationScreen'
import LoginScreen1 from './Screens/LoginScreen1'
import ConversationListScreen from './Screens/ConversationListScreen'
import LearningPath from './Screens/LearningPath'
import GameScreen1 from './Screens/GameScreen1'
import Game_navigation from './Navigation/Game_navigation'

const App = () => {
  return (
    // <App_navigation></App_navigation>
    // <LearningPath></LearningPath>
    // <GameScreen1></GameScreen1>
    <Game_navigation></Game_navigation>
    // <ConversationScreen></ConversationScreen>

    // <ConversationListScreen></ConversationListScreen>

    // <ConversationListScreen></ConversationListScreen>
    // <View>
    //   <Text>Hello World</Text>
    // </View>
  )
}

export default App