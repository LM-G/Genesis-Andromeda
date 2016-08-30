export default class ChatContenu {
  constructor() {
    this.messages = [];
    this.users = [];
  }

  setMessages(messages){
    this.messages = messages;
  }

  getMessages(){
    return this.messages;
  }

  setUsers(users){
    this.users = users;
  }
}

ChatContenu.$inject = [];