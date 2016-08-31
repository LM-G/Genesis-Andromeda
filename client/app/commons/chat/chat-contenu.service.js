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

  addMessage(message){
    this.messages.push(message);
    this.messages.sort(function(a, b){
      return new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime();
    });
  }
}

ChatContenu.$inject = [];