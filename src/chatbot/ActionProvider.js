// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
 greet = () => {
  const message = this.createChatBotMessage("hello User how can i be of assistance",{widget:"options"});
  this.addMessageToState(message);
};
rank = () => {
  const message = this.createChatBotMessage("our Institute has a nirf rank between 150-200.");
  this.addMessageToState(message);
};
notfound = () => {
  const message = this.createChatBotMessage(
    "cannot find the answer to that query"
  );
  this.addMessageToState(message);
};
course = () => {
  const message = this.createChatBotMessage(
   "We offer the following courses :- Computer Engineering, Electronic and Computer Science,Information Technology, Mechanical Engineering, Science & Humanities, Ai & Data Science"

  );
  this.addMessageToState(message);
};
scholarship = () => {
  const message = this.createChatBotMessage(
    "for all the scholorship related help you need visit :- http://frcrce.ac.in/index.php/students/student-info/scholarships"
  );
  this.addMessageToState(message);
};
placement = () => {
  const message = this.createChatBotMessage(
    "According to record of year 2019-2020, highest place was 18 LPA by Societe Generale"
  );
  this.addMessageToState(message);
};
research = () => {
  const message = this.createChatBotMessage(
    "To get all the details on facilities kindly visit:- http://www.frcrce.ac.in/index.php"
  );
  this.addMessageToState(message);
};
fest = () => {
  const message = this.createChatBotMessage(
    "We have lots of event like our annual fest Technomania at our institute"
  );
  this.addMessageToState(message);
};
principal=()=>{
  const message = this.createChatBotMessage(
  "Dr. Srija Unnikrishnan is our principal"
);
this.addMessageToState(message);

}
admission=()=>{
const message = this.createChatBotMessage(
  "for details about admission visit the following link:- http://frcrce.ac.in/#"
);
this.addMessageToState(message);

}
vision=()=>{
const message = this.createChatBotMessage(
  "CRCE will be a center of Excellence in Engineering Education, moulding engineers with state-of-the-art technologies, innovative skills and human values matching with the growing expectations of the corporates and the society and thus play an effective role in nation-building."
);
this.addMessageToState(message);

}
infra = () => {
  const message = this.createChatBotMessage(
    "for details about our infrastructure visit :- http://frcrce.ac.in/index.php/about-us/general-info/common-infra"
  );
  this.addMessageToState(message);
};

  addMessageToState =(message)=>{
    this.setState(prevState =>({
      ...prevState,
      messages:[...prevState.messages,message]
    }))
  }
}

export default ActionProvider;
