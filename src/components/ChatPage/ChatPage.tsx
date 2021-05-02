import React, { FC, useEffect } from 'react';
import useSocket from '../../socket/useSocket';
import ChatTop from '../ChatTop';
import ChatBottom from '../ChatBottom';
import Chat from '../Chat';

const ChatPage: FC = () => {
  const socket = useSocket();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected!');
    });
    socket.on('join room', (data) => {
      socket.emit('join', data);
    });
  }, [socket]);

  return (
    <main>
      <div className="container">
        <section className="row d-flex justify-content-center line">
          <div style={{height: '100%'}} className="col-11 col-md-8">
            <div
              className="login modal-content p-md-5 p-3"
            >
              <ChatTop />
              <Chat />
              <ChatBottom />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ChatPage;
