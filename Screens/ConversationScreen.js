import { View, Text,Image } from 'react-native'
import React from 'react'

const ConversationScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>ConversationScreen</Text>
      <Image source={require('./Assets/Learninglanguagescuate.png')} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default ConversationScreen