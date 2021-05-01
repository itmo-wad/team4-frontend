import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from '../ChatPage';
import IndexPage from '../IndexPage';
import store from '../../store/store';
import QuitModal from '../QuitModal';
import ChangeModal from '../ChangeModal';
import Header from '../Header';
import Footer from '../Footer';
import { socket, SocketProvider } from '../../socket';

const App: FC = () => (
  <SocketProvider value={socket}>
    <Provider store={store}>
      <Header />
      <Switch>
        <Route
          path="/chat"
          render={() => (
            localStorage.getItem('name')
              ? (
                <>
                  <ChatPage />
                  <QuitModal />
                  <ChangeModal />
                </>
              )
              : <Redirect to="/" />
          )}
        />
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
      <Footer />
    </Provider>
  </SocketProvider>
);

export default App;
