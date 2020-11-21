import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import React from 'react'
const config = {
botName:"Chatbot",
  initialMessages: [createChatBotMessage(`Hello, how can i help you?`
  ,{widget:"options"})],

  widgets:[
      {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
]
}

export default config