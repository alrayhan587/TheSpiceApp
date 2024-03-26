import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class WelcomeScreen extends Component {
    render() {
        return (

            <SafeAreaView className="flex-1">
                <View className="flex-1 flex justify-around my-4">

                    <View>
                        <View className="flex flex-row justify-center">
                            <Text className="text-black text-5xl font-bold text-center">Voca</Text>
                            <Text className="text-black text-5xl font-bold text-center">Verse</Text>

                        </View>
                        <Text className="text-black text-md font-light text-center">Learn language , build connections.</Text>
                    </View>


                    <View className="flex-row justify-center">
                        <Image source={require('./Assets/Onlineworldpana.png')}
                            style={{ width: 400, height: 400 }}
                        ></Image>
                    </View>
                    <View className="space-y-3">
                        <TouchableOpacity className="py-4 bg-rose-400 mx-5 rounded-xl">
                            <Text className="text-gray-800 text-xl font-bold text-center">Sign Up</Text>
                        </TouchableOpacity>
                        <View className="flex-row justify-center ">
                            <Text className="text-gray-800 font-bold">Already Have an account? </Text>
                            <TouchableOpacity >
                                <Text className="font-bold text-rose-500">Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

        )
    }
}

export default WelcomeScreen