import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Conversations = ({ block }) => {
    const { name, image } = block;
    console.log(block.image);
    return (

        <View className="border">
            <TouchableOpacity>
                <Text>Conversations</Text>
                
                {/* <Image source={{}} style={{ width: 200, height: 200 }} ></Image> */}
                <Text>{block.name}</Text>
                <Image source={{uri: image}} style={{width:200, height:200}}></Image>
            </TouchableOpacity>

        </View >
    )
}

export default Conversations