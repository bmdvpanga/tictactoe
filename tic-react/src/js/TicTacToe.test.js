import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTacToe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
