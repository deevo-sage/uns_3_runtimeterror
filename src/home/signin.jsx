import React, { useState, useContext } from "react";
import { auth, googleAuthProvider } from "../firebase"
import UserContext from "../usercontext";
const Signin = () => {
    var [email, setemail] = useState();
    var [user, setuser] = useContext(UserContext)
    var actionCodeSettings = {
        url: "http://localhost:3000/",
        handleCodeInApp: true,
    };

    return (
        <div>
            {!user.user && <div> <input type="text" onChange={(e) => {
                setemail(e.target.value);
            }}></input>
                <button onClick={() => {

                    auth.sendSignInLinkToEmail(email, actionCodeSettings)
                    window.localStorage.setItem("emailForSignIn", email);

                }}>Signin With Email</button>
                <button onClick={() => {
                    auth.signInWithPopup(googleAuthProvider).then(function () {
                    })
                        .catch(function (error) {
                            console.log(error)
                        });
                }}>Signin With Google</button>
            </div>}
        </div>
    );
};
export default Signin;
