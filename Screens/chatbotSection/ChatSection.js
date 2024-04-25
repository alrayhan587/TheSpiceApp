import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]); // State to hold chat messages
    const [textInput, setTextInput] = useState(''); // State to hold user input

    // Function to handle sending user message
    const handleSend = () => {
        if (!textInput.trim()) { return; } // Don't send empty messages
        const newMessage = { text: textInput, fromMe: true }; // Create message object
        setMessages([...messages, newMessage]); // Add message to chat history
        setTextInput(''); // Clear text input
        // Here you can send the message to the recipient
    };

    // Function to simulate receiving a message from the other side
    const receiveMessage = (messageText) => {
        const newMessage = { text: messageText, fromMe: false }; // Create message object
        setMessages([...messages, newMessage]); // Add message to chat history
    };

    // Simulate receiving initial messages when component mounts
    useEffect(() => {
        receiveMessage("Hi there! How can I help you?");
        receiveMessage("Feel free to ask me anything.");
    }, []);

    return (
        <View className="flex-1">
            {/* Display chat messages */}
            <ScrollView className="p-4">
                {messages.map((message, index) => (
                    <View key={index} className={`rounded-lg p-2 mt-2 ${message.fromMe ? 'self-end bg-green-200' : 'self-start bg-gray-200'}`}>
                        <Text className="text-base">{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Input field and send button */}
            <View className="flex-row items-center p-2 border-t border-gray-300">
                <TextInput
                    className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
                    value={textInput}
                    onChangeText={setTextInput}
                    placeholder="Type your message..."
                    multiline={true}
                />
                <Button title="Send" onPress={handleSend} />
            </View>
        </View>
    );
};

export default ChatScreen;
