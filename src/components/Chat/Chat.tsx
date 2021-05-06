import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { messagesActions } from '../../store/actions';
import useSocket from '../../socket/useSocket';
import 'react-toastify/dist/ReactToastify.css';

interface State {
  messages: {
    items: [{
      name: string,
      content: string,
    }],
    isInRoom: boolean,
  }
}

const Chat: FC = () => {
  const socket: any = useSocket();
  const divRef: any = useRef(null);
  const messages = useSelector((state: State) => state.messages.items);
  const isInRoom = useSelector((state: State) => state.messages.isInRoom);
  const dispatch = useDispatch();

  useEffect(() => {
    const addChatMessage = (name: string, content: string, id: string) => {
      dispatch(messagesActions.addMessage({ name, content, id }));
    };
    socket.on('connect', () => {
      console.log('Connected!');
    });

    socket.on('join room', (data: any) => {
      socket.emit('join', data);
    });

    socket.on('user disconnected', () => {
      toast.warn('User disconnected');
    });

    socket.on('joined room', () => {
      toast.success( 'Joined room!');
      dispatch(messagesActions.setIsInRoom(true));
    });

    socket.on('message', (msg: any) => {
      if (typeof msg !== 'undefined') {
        addChatMessage(msg.user_name, msg.message, msg.sid);
      }
    });
  }, [dispatch, socket]);

  useEffect(() => {
    divRef.current.scrollTo({
      top: divRef.current.scrollHeight,
      behavior: 'auto'
    });
  }, [messages])

  return (
    <>
      <div ref={divRef} className="chat_content">
        {!isInRoom ? 'Searching for a user...' : ''}
        {
          messages.map(
            (message: any, index: number) => (
              <div key={message.id + index}>{message.name}: {message.content} </div>
            ),
          )
        }
      </div>
    </>
  );
};

export default Chat;
