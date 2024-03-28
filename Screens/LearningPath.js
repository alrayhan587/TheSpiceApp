import { View, Text,Image } from 'react-native'
import React from 'react'

const LearningPath = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>LearningPath</Text>
      <Image source={require('./Assets/Learninglanguages-amico.png')} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default LearningPath