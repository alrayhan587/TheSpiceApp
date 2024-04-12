/* eslint-disable no-shadow */
import { View, Text, Image } from 'react-native'
import React, { useState, useCallback, useEffect, Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
// import { Dialogflow_V2 } from "react-native-dialogflow"
// import { dialogflowConfig } from '../env'

const botAvatar = require('./Assets/Robonosuke2.png')


const Bot = {
  _id: 2,
  name: 'Bot',
  avatar: botAvatar,
}


class ConversationScreen extends Component {


  state = {
    messages: [
      {
        _id: 2,
        text: "How may i help you?",
        createdAt: new Date(),
        user: Bot
      },
      {
        _id: 1,
        text: "Hello Developer!!",
        createdAt: new Date(),
        user: Bot
      }
    ],
    id: 1,
    name: '',
  };

  componentDidMount = () => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

 

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: Bot
    }

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }


  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
    let message = messages[0].text;


    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }



  onQuickReply = (quickReply) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, quickReply)
    }))
    let messages = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      messages,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    )
  }

  render() {
    return (
      <View className='flex-1 bg-white' >
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
          user={{
            _id: 1,
          }}
        />
      </View>

    )
  }
}

export default ConversationScreen;