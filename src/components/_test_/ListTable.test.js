import React from 'react';
import ReactDOM from 'react-dom';
import ListTable from '../ListTable';
import { addItem } from '../../ducks/groceries/index';

import { Provider } from "react-redux";
import configureStore from "../../store/configure-store";

const store = configureStore();

const testList = [
  {
    id: 66,
    name: 'Bananas',
    category: 'Fruit',
    deliveryMethod: 'Air',
  }
];

describe('on component load', () => {
  it('renders the list', () => {

    const div = document.createElement('div');
    
    ReactDOM.render(
      <Provider store={store}>
        <ListTable groceryList={testList} />
      </Provider>, div);

    expect(div.textContent).toContain(testList[0].name)

    ReactDOM.unmountComponentAtNode(div);
  });
});
