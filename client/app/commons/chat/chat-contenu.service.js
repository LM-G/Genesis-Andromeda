import _remove from 'lodash/remove';

export default class ChatContenu {
  constructor() {
    this.messages = [];
    this.users = [];
  }

  setMessages(messages){
    this.messages = messages;
    this.sortMessages();
  }

  getMessages(){
    return this.messages;
  }

  setUsers(users){
    this.users = users;
    this.sortUsers()
  }

  addMessage(message){
    this.messages.push(message);
    this.sortMessages();
  }

  addUser(user){
    this.users.push(user);
    this.sortUsers()
  }

  removeUser(user){
    _remove(this.users, {id : user.id});
  }

  sortMessages(){
    this.messages.sort(function(a, b){
      return new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime();
    });
  }

  sortUsers(){
    this.users.sort(function(a, b){
      return a.username < b.username;
    });
  }
}

ChatContenu.$inject = [];