import React from 'react';
import ReactDOM from 'react-dom';
import ListInputs from '../ListInputs';
import { addItem } from '../../ducks/groceries/index';

import { Provider } from "react-redux";
import configureStore from "../../store/configure-store";

const store = configureStore();

describe('on component load', () => {
  it('renders the list', () => {

    const div = document.createElement('div');
    
    ReactDOM.render(
      <Provider store={store}>
        <ListInputs addItem={addItem} />
      </Provider>, div);
    
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('on button click', () => {
  it('invokes addItem function', () => {

    const div = document.createElement('div');
    
    ReactDOM.render(
      <Provider store={store}>
        <ListInputs addItem={addItem} />
      </Provider>, div);
    
    ReactDOM.unmountComponentAtNode(div);
  });
});
