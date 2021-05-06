import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import ChatTop from '../ChatTop';
import ChatBottom from '../ChatBottom';
import Chat from '../Chat';
import { socket, SocketProvider } from '../../socket'
import QuitModal from '../QuitModal'
import ChangeModal from '../ChangeModal'

const ChatPage: FC = () => {
  const socketIO = socket('ws://localhost:5000')
  return (
    <SocketProvider value={socketIO}>
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
        <ToastContainer
          position="top-right"
          newestOnTop
          autoClose={false}
        />
      </main>
      <QuitModal />
      <ChangeModal />
    </SocketProvider>
  );
};

export default ChatPage;
