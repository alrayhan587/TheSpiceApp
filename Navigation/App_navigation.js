import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeSection from '../Screens/WelcomeSection';
import LoginScreen1 from '../Screens/LoginScreen1';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';
import Tab_navigation from './Tab_navigation';



const Stack = createNativeStackNavigator();

const App_navigation = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeSection} />
                <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen1} />
                {/* <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} /> */}
                <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen} />

                <Stack.Screen name='Root' options={{ headerShown: false }} component={Tab_navigation} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App_navigation