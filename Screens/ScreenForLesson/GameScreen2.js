import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameScreen2 = ({ route }) => {
    const { content } = route.params;
    const navigation = useNavigation();
    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [visibleButtons, setVisibleButtons] = useState(new Array(content.length).fill(true));
    const [isProcessSuccessful, setIsProcessSuccessful] = useState(false);


    const handlePress = (index, spanishValue) => {
        if (spanishValue === content[currentObjectIndex].spanish) {
            setVisibleButtons(prevState => {
                const newState = [...prevState];
                newState[index] = false;
                const allHidden = newState.every(visible => !visible);
                if (allHidden) {
                    // Alert.alert("Process successful");
                    setIsProcessSuccessful(true);
                }
                return newState;
            });
            setCurrentObjectIndex(prevIndex => (prevIndex + 1) % content.length);
        }
    };

    const handleContinue = () => {
        // Logic to continue to the next screen or perform any other action
        // navigation.navigate('Game2', { content });
    };



    return (
        <View className="flex-1 flex-col gap-28 items-center justify-center">
            <Text className="text-base text-black ">Find the answer of this question</Text>
            <View className="w-1/2">


                <TouchableOpacity className="bg-rose-400 rounded-xl mx-auto p-4" onPress={() => setCurrentObjectIndex(prevIndex => (prevIndex + 1) % content.length)}>
                    <Text className=" text-center text-2xl text-white">{content[currentObjectIndex].question}</Text>
                </TouchableOpacity>



            </View >

            <View className="flex flex-row flex-wrap gap-2 justify-center items-baseline">
                {content.map((item, index) => (
                    visibleButtons[index] && (
                        <TouchableOpacity className={`w-1/3`} key={index} onPress={() => handlePress(index, item.spanish)}>
                            <Text className={`border text-lg text-center rounded-xl p-${Math.floor(Math.random() * 6)} `}>{item.spanish}</Text>
                        </TouchableOpacity>
                    )
                ))}
            </View>



            <View className=" absolute bottom-4 left-24 ">
                {isProcessSuccessful && (
                    <TouchableOpacity className="bg-blue-500 rounded-xl w-52 mx-auto mt-5" onPress={() => handleContinue(content)}>
                        <Text className=" text-center text-2xl text-white">Continue</Text>
                    </TouchableOpacity>
                )}
            </View>


        </View >
    );
}

export default GameScreen2;
