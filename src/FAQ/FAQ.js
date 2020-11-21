import React, { useContext, useEffect, useState } from "react";
import { firestore,auth } from "../firebase";
import UserContext from "../usercontext";
import { map } from "lodash";

const FAQ = () => {
  var db = firestore.collection("FAQ");
  const [a, seta] = useState("");
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
      <div className="a">
        {map(list, (x, key) => (
          <div className="form faq">
            <form>
              <p key={key}>Q. {x.question} ?</p>
             <p key={key}>A. {x.answer}</p>
                             {auth.currentUser.admin &&   <button className="butt" onClick={(e) => {
                                    e.preventDefault();
                                    if (a != "") {
                                        db.doc(x.uid).delete().catch(function (error) {
                                            console.log(error)
                                        });
                                        seta("")
                                    }
                                }}>Delete Question</button>}
            </form>
           
          </div>
        ))}
        <div className="form dfaq">
  <form>
    <p>Didn't find your answer? Ask it here</p>

    <input
      type="text"
      placeholder="Heading"
      onChange={(e) => {
        seta(e.target.value);
      }}
      required
    ></input>

    <button
      className="butt"
      onClick={(e) => {
        e.preventDefault();
        if (a != "") {
          firestore
            .collection("FAQ")
            .add({
              question: a,
              answer: "null"
            })
            .catch(function (error) {
              console.log(error);
            });
          seta("");
          setb("");
        }
      }}
    >
      Submit
    </button>
  </form>
</div>

      </div>
  </div>
);

};
export default FAQ;
