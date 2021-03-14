import React from 'react';
import ReactDOM from 'react-dom';
import ListSelection from '../ListSelection';

import { Provider } from "react-redux";
import configureStore from "../../store/configure-store";

const store = configureStore();
const defaultMessaging = "Please, make a selection.";

describe('when selected item is provided', () => {
  it('renders selected item', () => {

    const testItem = {
      name: "Test Item"
    }

    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <ListSelection selectedItem={testItem} />
      </Provider>, div);

    expect(div.textContent).toEqual(testItem.name);

    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('when selected item is not provided', () => {
  it('renders default messaging', () => {

    const testItem = '';

    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <ListSelection selectedItem={testItem} />
      </Provider>, div);

    expect(div.textContent).toEqual(defaultMessaging);

    ReactDOM.unmountComponentAtNode(div);
  });
});
