import React from 'react';
import ReactDOM from 'react-dom';
import App from './TicTacToe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTacToe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
