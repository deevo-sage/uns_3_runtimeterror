import React from "react";
import Chatbot from 'react-chatbot-kit'
import "./chatbot.css"
import Action from './ActionProvider'
import config from "./config";
import Parser from "./messageParser";


const Chatbotcomp =()=>{
return(
    <div>
<div>
<Chatbot
config={config}
actionProvider={Action}
messageParser={Parser}
/>    
</div>

    </div>
)

}
export default Chatbotcomp;