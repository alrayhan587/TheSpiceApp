import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native'

import React, { useEffect, useState } from 'react'
import lessonData from './Lesson.json';
import LessonsScreen from './LessonsScreen';

const LearningPath = () => {

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
          {lessons.map(les => <LessonsScreen key={les.id} lessons={les}></LessonsScreen>)}
        </View>
      </View>
    </ScrollView>
  )
}

export default LearningPath