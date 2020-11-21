import React, { useState } from "react"
import {map} from "lodash"
const Bot = () =>{
    const [message, setmessage] = useState([{ message: "sample message by the bot", by: "bot" }, { message: "sample message by the user", by: "user" }]);
    return(
    <div>
        <div className="outer-box">
        <div className="inner-box">
        <div className="message-area">
            { map(message,(m,key)=>{
   return(             <div className={m.by} key={key}>{m.message}</div>  )})}
    
        </div>
        <div className="options-area"></div>
        
        </div>
        </div>
        
    </div>
    )
}
export default Bot;