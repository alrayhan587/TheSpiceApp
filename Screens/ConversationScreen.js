/* eslint-disable no-shadow */
import { View, Text, Image } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'




const ConversationScreen = () => {
  const botAvatar = require('./Assets/bot-icon.webp')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: botAvatar,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const onQuickReply=()=>{}

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ConversationScreen