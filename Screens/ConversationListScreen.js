import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import myData from './Constant.json'
import Conversations from './Conversations';



const ConversationListScreen = () => {

  const [block, setBlock] = useState([]);
  useEffect(() => {
    setBlock(myData);
  }, [])


  return (
    <ScrollView>
      <View className=" mt-5 pl-5">
        <Text className="text-4xl font-bold text-rose-400 ">AI Chat</Text>
      <Text className="text-sm ">Make your interactions better.</Text>
      </View>
      
      <View>{block.map(blo => <Conversations key={blo.id} block={blo}></Conversations>)}</View>{block.map(blo => { <Conversations key={blo.id} block={blo}></Conversations> })}

      {/* <Text>More</Text> */}

    </ScrollView>
  )
}

export default ConversationListScreen