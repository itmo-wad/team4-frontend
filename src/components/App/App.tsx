import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from '../ChatPage';
import IndexPage from '../IndexPage';
import store from '../../store/store';
import Header from '../Header';
import Footer from '../Footer';

const App: FC = () => (
  <Provider store={store}>
    <Header />
    <Switch>
      <Route
        path="/chat"
        render={() => (
          localStorage.getItem('name') ? <ChatPage /> : <Redirect to="/" />
        )}
      />
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
    <Footer />
  </Provider>
);

export default App;
