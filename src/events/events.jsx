import React, { useContext, useEffect, useState } from "react";
import { firestore, auth } from "../firebase";
import UserContext from "../usercontext";
import { map } from "lodash";

const News = () => {
    var db = firestore.collection("News");
    const [a, seta] = useState("");
    const [list, setlist] = useState();

    const [user] = useContext(UserContext);
    useEffect(async function () {
        var arr = [];
        await db
            .get()
            .then((snapshot) => {
                snapshot.forEach((x) => {
                    var y = x.data();
                    y.uid = x.id;
                    arr.push(y);
                });
            });
        setlist(arr);
    }, []);

    return (
        <div>
            <div className="a">
                {map(list, (x, key) => (
                    <div key={key} className="form news">
                        <form>
                            <h3 >{x.heading}</h3>
                            <p>{x.text}</p>
                            {auth.currentUser.admin && <button className="butt" onClick={(e) => {
                                e.preventDefault();
                                if (a != "") {
                                    db.doc(x.uid).delete().catch(function (error) {
                                        console.log(error)
                                    });
                                    seta("")
                                }
                            }}>Delete News</button>}
                        </form>

                    </div>
                ))}
               

      </div>
        </div>
    );

};
export default News;
