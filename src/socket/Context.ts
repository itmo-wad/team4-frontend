import { createContext } from 'react';
import socket from './socket';

export const Context = createContext(socket);
export const { Provider } = Context;
