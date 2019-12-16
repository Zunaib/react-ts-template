import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const Index = () => {
  return <App> Hi React Typescript</App>;
};

ReactDOM.render(<Index />, document.getElementById('root'));
