import { View, Text,ScrollView } from 'react-native'
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

  // console.log(myData);
  return (
    <ScrollView>
      <Text>Data numbers : {block.length}</Text>
      <View>{block.map(blo => <Conversations key={blo.id} block={blo}></Conversations>)}</View>{block.map(blo => { <Conversations key={blo.id} block={blo}></Conversations> })}

      <Text>More</Text>

    </ScrollView>
  )
}

export default ConversationListScreen