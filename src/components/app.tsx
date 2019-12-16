import * as React from 'react';

export interface AppProps {
  children: React.ReactNode;
}

export const App: React.FC<AppProps> = children => {
  return <div>{children}</div>;
};

export default App;
