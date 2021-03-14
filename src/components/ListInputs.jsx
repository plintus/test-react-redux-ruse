import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ListInputs = ({ addItem }) => {

  let [itemId, updateId] = useState(Math.floor(Math.random() * Math.floor(100)));

  const createItem = () => {
    const item = {
      id: itemId,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    }

    updateId(++itemId);

    addItem(item);
  }

  return (
    <button
      className="addItemButton"
      onClick={createItem}
    >
      Add Random Item
    </button>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default ListInputs;
