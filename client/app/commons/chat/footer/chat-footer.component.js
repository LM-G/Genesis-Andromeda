import ChatFooterController from './chat-footer.controller';

const ChatFooterComponent = {
  require: {
    parent: '^chat'
  },
  controller: ChatFooterController,
  templateUrl: '/commons/chat/footer/chat-footer.html'
};

export default ChatFooterComponent;