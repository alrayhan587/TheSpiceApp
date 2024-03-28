import { View, Text ,Image} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="">HomeScreen</Text>
      <Image source={require('./Assets/LearningLanguagesBro.png')} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default HomeScreen