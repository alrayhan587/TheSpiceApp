import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Conversations = ({ block }) => {
    const { name, image } = block;
    console.log(block.image);
    return (

        <View className="border-0 px-3 my-4">
            <TouchableOpacity className="flex flex-col bg-white border border-gray-200 rounded-lg shadow">
                {/* <Text>Conversations</Text> */}
                <Image className="object-cover w-full rounded-t-lg h-44" source={{ uri: image }}></Image>
                {/* <Image source={{}} style={{ width: 200, height: 200 }} ></Image> */}
                <View className="flex flex-col justify-between p-3 leading-normal">
                    <Text className="mb-3 text-lg font-normal text-gray-600 dark:text-gray-400">{block.name}</Text>
                </View>


            </TouchableOpacity>

        </View >
    )
}

export default Conversations