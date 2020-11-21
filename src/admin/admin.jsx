import React, { useContext, useEffect, useState } from "react";
import {firestore} from "../firebase"
import UserContext from "../usercontext"
import {map} from "lodash";
const Admin = () => {
    var db = firestore.collection("FAQ");
    const [a, seta] = useState("");
    const [b, setb] = useState("");

    const [list, setlist] = useState();
    const [user,setuser]=useContext(UserContext);
    useEffect(async function(){
        var arr=[]    
        await db.where("answer", "==", "null").get().then((snapshot) => {
                snapshot.forEach((x) => {
                    var y=x.data();
                    y.uid=x.id;
                 arr.push(y)  

                })
            })
   setlist(arr)
},[a])
    return (
        <div >
          {user.admin &&  
          <div className="a">
                <div className="form didnt" key="news">
                    <form>
                        <p>Add Latest News or Events</p>

                        <input type="text" placeholder="Heading" onChange={(e) => {
                            seta(e.target.value)
                        }} required></input>
                        <input type="text" placeholder="text" onChange={(e) => {
                            setb(e.target.value)
                        }} required></input>
                        <button className="butt" onClick={(e) => {
                            e.preventDefault();
                            console.log(a,b)
                            if (a != "") {
                                firestore.collection("News").add({
                                    heading: a,
                                    text: b
                                }).catch(function (error) {
                                    console.log(error)
                                });
                                seta("")
                                setb("")

                            }
                        }}>Submit</button>

                    </form>

                </div>
                <div className="form didnt" key="qna">
                    <form>
                        <p>add both question and answer or answer the following unanswerd question...</p>

                        <input type="text" placeholder="Answer" onChange={(e) => {
                            seta(e.target.value)
                        }} required></input>
                        <input type="text" placeholder="text" onChange={(e) => {
                            setb(e.target.value)
                        }} required></input>
                        <button className="butt" onClick={(e) => {
                            e.preventDefault();
                            if (a != "") {
                                db.add({
                                    heading: a,
                                    text: b
                                }).catch(function (error) {
                                    console.log(error)
                                });
                                seta("")
                                setb("")

                            }
                        }}>Submit</button>

                    </form>

                </div>

                    {
                    map(list, (x, key) => (
                        <div className="form "> 
                            <form>
                                <p key={key}>{x.question} ?</p>
                               
                                <input type="text" placeholder="Answer" onChange={(e) => {
                                    seta(e.target.value)
                                }} required></input>
                                <button className="butt" onClick={(e) => {
                                    e.preventDefault();
                                    if(a!=""){
                                    db.doc(x.uid).update({
                                        answer: a
                                    }).catch(function (error) {
                                        console.log(error)
                                    });
                                    seta("")
                                }
                                }}>Submit</button>
                                <button className="butt" onClick={(e) => {
                                    e.preventDefault();
                                    if (a != "") {
                                        db.doc(x.uid).delete().catch(function (error) {
                                            console.log(error)
                                        });
                                        seta("")
                                    }
                                }}>Delete Question</button>
                            </form>
                         
                        </div>
                    ))
                }
              
            </div>}
        </div>
    )
}
export default Admin