import React from "react";
import Bot from "../chatbot/chatbot";
import SignIn from "./signin";
import {auth} from '../firebase'
const Home = () => {
 
  return (
    <div>
      <SignIn/>
      {auth.currentUser && <Bot/>}
    </div>
  );
};
export default Home;
