import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import LessonsScreen from '../Screens/LessonsScreen';
import GameScreen1 from '../Screens/GameScreen1';
import LearningPath from '../Screens/LearningPath';

const Stack = createNativeStackNavigator();

const Game_navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LearningPath">
      <Stack.Screen name="LearningPath" options={{ headerShown: false }} component={LearningPath} />
      <Stack.Screen name="Game1" options={{ headerShown: false }} component={GameScreen1} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Game_navigation