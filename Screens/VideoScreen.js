import { View, Text, Image } from 'react-native'
import React from 'react'

const VideoScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>VideoScreen</Text>
      <Image source={require('./Assets/Learninglanguages-rafiki.png')} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default VideoScreen