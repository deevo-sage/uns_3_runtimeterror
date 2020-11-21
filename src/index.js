import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Home from "./home/home.js";
import FAQ from "./FAQ/FAQ"
import Nav from "./navbar/navbar"
import {auth} from "./firebase"
import UserContext from "./usercontext"
import "./style.css";
import Admin from "./admin/admin.jsx";
import News from "./events/events"
const App = () => {
  const [user, setuser] = useState({admin:false,user:false});
useEffect(() => {
  if (auth.isSignInWithEmailLink(window.location.href)) {
  var email = window.localStorage.getItem("emailForSignIn");
  if (!email) {
    email = window.prompt("Please provide your email for confirmation");
  }
  auth
    .signInWithEmailLink(email, window.location.href)
    .then(function (result) {
      window.localStorage.removeItem("emailForSignIn");
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      currentUser.user=true;
  if (currentUser.email == "sidsahni00@gmail.com") {
    currentUser.admin = true;

  }
  else{
    currentUser.admin = false;
  }
  setuser(currentUser);

}
   
       
  });
}, []);

  return (
    <div>  
      <UserContext.Provider value={[user, setuser]}>

  {user.user && <Nav/> }
        <Router>
    <Home path="/"/>
    <FAQ path="/FAQ"/>
    {user.admin && <Admin path="/admin"/>}
    <News path="/News"/>
        </Router>
    </UserContext.Provider>

    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
