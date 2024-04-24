import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LessonsScreen = ({ lessons }) => {
    const { id, name, number } = lessons;
    return (
        <TouchableOpacity className="">

            <View className="p-6 mb-5 mx-3 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 ">

                <Text className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lesson {lessons.number}:</Text>
                <Text className="font-normal text-gray-700 dark:text-gray-400">{lessons.name}</Text>
            </View>
            

        </TouchableOpacity>
    )
}

export default LessonsScreen