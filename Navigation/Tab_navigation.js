import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ConversationScreen from '../Screens/ConversationScreen';
import LearningPath from '../Screens/LearningPath';
import VideoScreen from '../Screens/VideoScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const Tab_navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator

                initialRouteName="Home"
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        // height: 40,
                        position: 'relative',
                        bottom: 10,
                        left: 20,
                        right: 20,
                        borderRadius: 16,
                        elevation: 0,
                        // borderWidth:0,
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            >
                <Tab.Screen name="Home" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Icon name={focused ? "home-sharp" : "home-outline"} size={focused ? 35 : 28} color={focused ? "#fb7185" : "black"} />) }} component={HomeScreen} />
                <Tab.Screen name="Conversation" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Icon name={focused ? "chatbubbles-sharp" : "chatbubbles-outline"} size={focused ? 35 : 28} color={focused ? "#fb7185" : "black"} />) }} component={ConversationScreen} />
                <Tab.Screen name="Learning" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Icon name={focused ? "language-sharp" : "language-outline"} size={focused ? 35 : 28} color={focused ? "#fb7185" : "black"} />) }} component={LearningPath} />
                <Tab.Screen name="Video" options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => (<Icon name={focused ? "play-circle-sharp" : "play-circle-outline"} size={focused ? 35 : 28} color={focused ? "#fb7185" : "black"} />) }} component={VideoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tab_navigation