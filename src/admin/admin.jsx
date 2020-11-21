import React, { useContext, useEffect, useState } from "react";
import {firestore} from "../firebase"
import UserContext from "../usercontext"
import {map} from "lodash";
const Admin = () => {
    var db = firestore.collection("FAQ");
    const [q,setq]=useState();
    const [a, seta] = useState();
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
    },[])
    
    return (
        <div >
          {user.admin &&  
          <div className="a">
              
                    {
                    map(list, (x, key) => (
                        <div className="form"> 
                            <form>
                                <p key={key}>{x.question} ?</p>
                               
                                <input type="text" value={a} onChange={(e) => {
                                    seta(e.target.value)
                                }}></input>

                            </form>
                            <button className="butt" onClick={() => {
                                db.doc().update({ 
                                    answer: a
                                }).catch(function (error) {
                                    console.log(error)
                                });
                                setq("")
                                seta("")
                            }}>Submit</button>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}
export default Admin