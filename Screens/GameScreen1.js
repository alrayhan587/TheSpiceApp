import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const GameScreen1 = ({ route }) => {
    const { content } = route.params;

    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [visibleButtons, setVisibleButtons] = useState(new Array(content.length).fill(true));

    const handlePress = (index, spanishValue) => {
        if (spanishValue === content[currentObjectIndex].spanish) {
            setVisibleButtons(prevState => {
                const newState = [...prevState];
                newState[index] = false;
                const allHidden = newState.every(visible => !visible);
                if (allHidden) {
                    Alert.alert("Process successful");
                }
                return newState;
            });
            setCurrentObjectIndex(prevIndex => (prevIndex + 1) % content.length);
        }
    };
    

    return (

        <View className="flex-1 flex-col gap-40 items-center justify-center">
            <View className="flex flex-row flex-wrap gap-2 justify-center items-baseline">
                {content.map((item, index) => (
                    visibleButtons[index] && (
                        <TouchableOpacity className={`w-1/3`} key={index} onPress={() => handlePress(index, item.spanish)}>
                            <Text className={`border text-lg text-center rounded-xl p-${Math.floor(Math.random() * 6)} `}>{item.english}</Text>
                        </TouchableOpacity>
                    )
                ))}
            </View>

            <View className="w-1/2">
                <TouchableOpacity className="bg-rose-400 rounded-xl w-36 mx-auto" onPress={() => setCurrentObjectIndex(prevIndex => (prevIndex + 1) % content.length)}>
                    <Text className=" text-center text-2xl text-white">{content[currentObjectIndex].spanish}</Text>
                </TouchableOpacity>

                <Text className="text-base text-black mt-10">Can you guess the meaning?</Text>
            </View> 
           
        </View>
    );
}

export default GameScreen1;