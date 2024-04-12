import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import myData from './Constant.json'



const ConversationListScreen = () => {

  const [block, setBlock] = useState([]);
  useEffect(() => {
    setBlock(myData);
  }, [])

  console.log(myData);
  return (
    <View>
      <Text>Data numbers : {block.length}</Text>

    </View>
  )
}

export default ConversationListScreen