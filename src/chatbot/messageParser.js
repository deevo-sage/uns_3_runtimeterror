import { firestore, auth } from "../firebase";


class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
   if(lowercase.includes("hello") || lowercase.includes("hi"))
    {
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email: auth.currentUser.email,
  list: auth.currentUser.list,
});

      this.actionProvider.greet();

    }
    else if(lowercase.includes("rank")|| lowercase.includes("nirf")|| lowercase.includes("ranking")|| lowercase.includes("ranked"))
     {
       auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});
      this.actionProvider.rank();


      } 
    else if(lowercase.includes("courses")|| lowercase.includes("branches") || lowercase.includes("course")|| lowercase.includes("branch"))
     {
      this.actionProvider.course();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      } 
else if(lowercase.includes("scholarship")|| lowercase.includes("levage") || lowercase.includes("help"))
     {
      this.actionProvider.scholarship();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});
        this.actionProvider.notfound();
      }
     else  if(lowercase.includes("highest")|| lowercase.includes("package") || lowercase.includes("placement")|| lowercase.includes("job")|| lowercase.includes("jobs")|| lowercase.includes("placements")|| lowercase.includes("packages"))
     {
      this.actionProvider.placement();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      } 
else  if(lowercase.includes("highest")|| lowercase.includes("package")|| lowercase.includes("facility") || lowercase.includes("laboratory")|| lowercase.includes("labs")|| lowercase.includes("lab")|| lowercase.includes("facilities")|| lowercase.includes("research")|| lowercase.includes("development"))
     {
      this.actionProvider.research();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      } 
else  if(lowercase.includes("fest")|| lowercase.includes("event") || lowercase.includes("events")|| lowercase.includes("fests")|| lowercase.includes("party"))
     {
      this.actionProvider.fest();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      }  
else  if(lowercase.includes("dr")|| lowercase.includes("owner")|| lowercase.includes("leader")|| lowercase.includes("principal"))
     {
      this.actionProvider.principal();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      }  
else  if(lowercase.includes("admission")|| lowercase.includes("graduation")|| lowercase.includes("post graduation")|| lowercase.includes("post") ||lowercase.includes("grad")||lowercase.includes("phd"))
     {
      this.actionProvider.admission();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});

      } 
else  if(lowercase.includes("vision")|| lowercase.includes("aim")|| lowercase.includes("mission")|| lowercase.includes("goal"))
     {
      this.actionProvider.vision();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});
      
      }  
else if(lowercase.includes("campus")||lowercase.includes("building")||lowercase.includes("buildings")|| lowercase.includes("infrastructure")|| lowercase.includes("infra")|| lowercase.includes("structure"))
     {
      this.actionProvider.infra();
auth.currentUser.list[auth.currentUser.list.length] = lowercase;
firestore.collection("users").doc(auth.currentUser.uid).set({
  email:auth.currentUser.email,
  list: auth.currentUser.list,
});
      }
        else{
        this.actionProvider.notfound();
      }
  }
}
export default MessageParser;
