import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'

const GameScreen1 = () => {
    const obj1 = { eng: "hello", jap: "moshi" };
    const obj2 = { eng: "good morning", jap: "konichiwa" };

    const [currentObjectIndex, setCurrentObjectIndex] = useState(0); // State to track the index of the current object

    const handlePress = () => {
        setCurrentObjectIndex(prevIndex => (prevIndex + 1) % objects.length); // Update the index to the next object
    };
    const objects = [obj1, obj2];
    return (
        <View className="flex">
            {objects.map((obj, index) => (
                <TouchableOpacity key={index} onPress={() => console.log(obj.eng)}>
                    <Text className="border ">{obj.eng}</Text>
                </TouchableOpacity>



            ))}

            <View className="">
                <TouchableOpacity onPress={handlePress}>
                    <Text className="border">{objects[currentObjectIndex].jap}</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}

export default GameScreen1