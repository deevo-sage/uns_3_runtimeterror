import React, { useContext, useEffect, useState } from "react";
import {firestore} from "../firebase"
import UserContext from "../usercontext"
import {map} from "lodash";
const Admin = () => {
    var db = firestore.collection("FAQ");
    const [a, seta] = useState("");
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
              
                    {
                    map(list, (x, key) => (
                        <div className="form"> 
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
                            </form>
                         
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}
export default Admin