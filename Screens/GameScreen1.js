import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'

const GameScreen1 = () => {
    const obj1 = { eng: "hello", jap: "moshi" };
    const obj2 = { eng: "good morning", jap: "konichiwa" };

    const [currentObjectIndex, setCurrentObjectIndex] = useState(0); // State to track the index of the current object
    const [visibleButtons, setVisibleButtons] = useState([true, true]);



    const handlePress = (index, japValue) => {

        // console.log(visibleButtons);
        if (japValue === objects[currentObjectIndex].jap) {
            setVisibleButtons(prevState => {
                const newState = [...prevState];
                newState[index] = false; // Hide the clicked button
                const allHidden = newState.every(visible => !visible); // Check if all buttons are hidden
                if (allHidden) {
                    Alert.alert("Process successful");
                }
                return newState;
            });
            console.log(visibleButtons);
            setCurrentObjectIndex(prevIndex => (prevIndex + 1) % objects.length); // Update the index to the next object

        }

    };

    const objects = [obj1, obj2];

    return (
        <View className="flex-1 justify-center items-center">
            {objects.map((obj, index) => (
                visibleButtons[index] && (
                    <TouchableOpacity className="w-1/3" key={index} onPress={() => handlePress(index, obj.jap)}>
                        <Text className="border text-center ">{obj.eng}</Text>
                    </TouchableOpacity>
                )
            ))}

            <View className="w-1/3 mt-16">
                <TouchableOpacity className="" onPress={() => setCurrentObjectIndex(prevIndex => (prevIndex + 1) % objects.length)}>
                    <Text className="border text-center">{objects[currentObjectIndex].jap}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GameScreen1
