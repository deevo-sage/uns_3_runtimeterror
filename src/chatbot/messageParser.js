class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if(lowercase.includes("hello") || lowercase.includes("hi"))
    {
      this.actionProvider.greet();
    }
  }
}
export default MessageParser;
