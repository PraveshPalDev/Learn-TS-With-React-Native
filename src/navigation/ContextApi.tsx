import {createContext, ReactNode} from 'react';

type MyContext = {
  bg: string;
  color: string;
};

const context = {
  bg: '#8da9c2',
  color: '#aa30e3',
};

type contextProvider = {
  children: ReactNode;
};

export const MyContext = createContext<MyContext>(context);

export const ContextProvider = ({children}: contextProvider) => {
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
