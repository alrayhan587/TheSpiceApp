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
        <View className="flex-1 justify-center items-center">
            {content.map((item, index) => (
                visibleButtons[index] && (
                    <TouchableOpacity className="w-1/3" key={index} onPress={() => handlePress(index, item.spanish)}>
                        <Text className="border text-center ">{item.english}</Text>
                    </TouchableOpacity>
                )
            ))}
            <View className="w-1/3 mt-16">
                <TouchableOpacity className="" onPress={() => setCurrentObjectIndex(prevIndex => (prevIndex + 1) % content.length)}>
                    <Text className="border text-center">{content[currentObjectIndex].spanish}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default GameScreen1;