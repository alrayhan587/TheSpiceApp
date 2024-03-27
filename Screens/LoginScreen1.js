import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth';
// import { Ionicons } from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const LoginScreen1 = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const userSignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('User Logged In');
            })
            .catch(error => {

                console.log(error);
            });
    }

    const handleLoginPress = () => {
        userSignIn();
        navigation.navigate('Root');
    }
    return (
        <View className="flex-1 w-full">
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        // onPress={() => navigation.goBack()} 
                        className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                        <Icon name='angle-left' size={25} color={'black'}></Icon>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center my-8">
                    <Image source={require('./Assets/Learninglanguagespana.png')} style={{ width: 200, height: 200 }} />
                </View>
            </SafeAreaView>

            <View className="flex-1 bg-gray-100 p-5 py-8 " style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className="form space-y-2">
                    <Text className="text-black ml-2 font-bold mt-7">Email Address</Text>
                    <TextInput
                        className="p-3 bg-white font-light text-gray-700 rounded-2xl mb-3"
                        placeholder='Enter your Email'
                        onChangeText={text => setEmail(text)}
                    />

                    <Text className="text-black ml-2 font-bold ">Password</Text>
                    <TextInput
                        className="p-3 bg-white text-gray-700 rounded-2xl font-bold"
                        secureTextEntry
                        placeholder='Enter Password'
                        onChangeText={text => setPassword(text)}
                    />

                    <TouchableOpacity
                        // onPress={() => navigation.navigate('ForgetPassword')}
                        className="flex items-end mb-20">
                        <Text className="text-gray-500 font-bold mr-2">Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="py-4 bg-rose-400 rounded-xl mb-3"
                        onPress={handleLoginPress}
                    >
                        <Text className="font-bold text-center text-white ">Login</Text>
                    </TouchableOpacity>
                </View>

                {/* <Text className="text-xl text-black font-bold text-center py-3">Or</Text> */}

                {/* <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
              <Image source={require("../Image/google_Logo.png")} className="w-12 h-12" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
              <Image source={require("../Image/Apple_Logo.png")} className="w-12 h-12" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-200 rounded-2xl">
              <Image source={require("../Image/facebook_Logo.webp")} className="w-12 h-12" />
            </TouchableOpacity>
          </View> */}

                <View className="flex-row justify-center">
                    <Text className="text-gray-500 text-xs ">Don't have an account?</Text>
                    <TouchableOpacity
                    //  onPress={() => navigation.navigate('Root')}
                    >
                        <Text className=" font-bold text-rose-500 text-xs "> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default LoginScreen1