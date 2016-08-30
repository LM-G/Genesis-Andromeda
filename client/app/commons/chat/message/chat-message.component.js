import ChatMessageController from './chat-message.controller';

const ChatComponent = {
  controller: ChatMessageController,
  templateUrl: '/commons/chat/message/chat-message.html',
  bindings: {
    message : '<'
  }
};

export default ChatComponent;