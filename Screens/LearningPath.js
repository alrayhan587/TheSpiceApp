import { View, Text,Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import lessonData from './Lesson.json';
import LessonsScreen from './LessonsScreen';

const LearningPath = () => {

  const [lessons, setLessons]=useState([]);
  useEffect(()=>{
    setLessons(lessonData);
  },[])

  return (
    <ScrollView> 

      {/* For search button */}
    
    

      {/* For lesson section */}
      <View className="mt-5">
        {/* <Text>LearningPath : {lessons.length}</Text> */}
        <View>
          {lessons.map(les=><LessonsScreen key={les.id} lessons={les}></LessonsScreen>)}
        </View>
      </View>
    </ScrollView>
  )
}

export default LearningPath