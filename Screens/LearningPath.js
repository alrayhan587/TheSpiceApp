import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native'

import React, { useEffect, useState } from 'react'
import lessonData from './Lesson.json';
import LessonsScreen from './LessonsScreen';
import { useNavigation } from '@react-navigation/native';

const LearningPath = () => {

  const navigation = useNavigation();

  const handlePress = (content) => {
    navigation.navigate('Game1', { content });
  };

  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    setLessons(lessonData);
  }, [])

  return (
    <ScrollView className="mt-5">

      <View className="my-3 ml-3">
        <Text className="text-4xl font-bold text-rose-400">Lesson</Text>
        <Text className="text-sm">Learn the Language with game</Text>
      </View>

      {/* For search button */}


      <TextInput
        className=" border rounded-lg p-3 mx-3 mb-5"
        placeholder="Search..."
      />


      {/* For lesson section */}
      <View className="mt-5">
        {/* <Text>LearningPath : {lessons.length}</Text> */}
        <View>
          {lessons.map(lesson => <TouchableOpacity key={lesson.id} onPress={() => handlePress(lesson.content)}>
            <View className="p-6 mb-5 mx-3 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <Text className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lesson {lesson.number}:</Text>
              <Text className="font-normal text-gray-700 dark:text-gray-400">{lesson.name}</Text>
            </View>
          </TouchableOpacity>)}
        </View>
      </View>
    </ScrollView>
  )
}

export default LearningPath