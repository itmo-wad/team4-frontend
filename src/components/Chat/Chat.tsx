import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { messagesActions } from '../../store/actions';
import useSocket from '../../socket/useSocket';

const Chat: FC = () => {
  const socket = useSocket();
  const messages: any = useSelector<any>((state) => state.messages.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const addChatMessage = (name: string, content: string) => {
      dispatch(messagesActions.addMessage({ name, content }));
    };

    socket.on('user disconnected', () => {
      addChatMessage('Noti', 'User disconnected');
    });

    socket.on('joined room', () => {
      addChatMessage('Noti', 'Joined room!');
    });

    socket.on('message', (msg) => {
      if (typeof msg !== 'undefined') {
        addChatMessage(msg.user_name, msg.message);
      }
    });
  }, [dispatch, socket]);

  return (
    <div className="chat_content">
      {
        messages.map(
          (message: any) => (
            <div key={message.content + message.name}> {message.name}: {message.content} </div>
          ),
        )
      }
    </div>
  );
};

export default Chat;
