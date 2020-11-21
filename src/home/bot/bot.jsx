import React, { useState } from "react";
import { map } from "lodash";
import question from "../../question.json";
import "./style.css";

const Bot = () => {
  const [bot, setbot] = useState({
      message: {
    "text": "sample text by bot",
      "list": [],
      "link": {}},

    by: "bot",
  });
    const [user, setuser] = useState();

  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <div className="message-area">
         
            {user && <div className="user">
              <p>{user.message}</p>
            </div>}
               {bot && (
              <div className="bot">
                <p>{bot.message.text}
            <a href={bot.message.link.href}>{bot.message.link.name}</a>

                <ul>
                    {bot.message.list.map((x)=>{
                        return(<li>{x}</li>)
                    })}
                </ul>
                </p>
              </div>
            )}
          </div>
          <div className="options-area">
            {map(question.questions, (q, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    setuser({ message: q.question, by:"user"});
                    setbot({ message: q.answer, by:"bot"});
                  }}
                >
                  {q.question}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bot;
