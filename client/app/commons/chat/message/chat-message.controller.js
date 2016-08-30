/**
 * Controls the chat message component
 */
export default class ChatMessageController {
  constructor() {
    this.username = this.message.user.username;
    this.content = this.message.content;
    this.date = this.message.createdAt;
  }

  $onInit() {}
}
ChatMessageController.$inject = [];