import React, { useContext, useEffect, useState } from "react";
import { firestore } from "../firebase";
import UserContext from "../usercontext";
import { map } from "lodash";

const FAQ = () => {
  var db = firestore.collection("FAQ");
const [list, setlist] = useState();

const [user] = useContext(UserContext);
useEffect(async function () {
  var arr = [];
  await db
    .where("answer", "!=", "null")
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
    {user.admin && (
      <div className="a">
        {map(list, (x, key) => (
          <div className="form">
            <form>
              <p key={key}>{x.question} ?</p>
             <p key={key}>{x.answer}</p>
            </form>
           
          </div>
        ))}
      </div>
    )}
  </div>
);

};
export default FAQ;
