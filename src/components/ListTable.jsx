import React from 'react';

export const ListTable = (props) => {

  const { 
    groceryList, 
    removeItem, 
    selectItem, 
    deselectItem,
    isItemSelected,
    selectedItem,
  } = props;

  return (
    <div className="listTable">
        <div className="row header">
          <div>Name</div>
          <div>Category</div>
          <div>Delivery Method</div>
          <div>Actions</div>
        </div>
        {groceryList.map((item, index) => {

            const selectionActive = isItemSelected && item.id === selectedItem.id;
            const selectCopy = selectionActive ? 'Deselect' : 'Select';

            return(
              <div className="row" key={index}>
                <div>{item.name}</div>
                <div>{item.category}</div>
                <div>{item.deliveryMethod}</div>
                <div className="inputs">
                  <input type="button" onClick={selectionActive ? () => deselectItem() : () => selectItem(item)} value={selectCopy} />
                  <input type="button" onClick={() => removeItem(item.id)} value="Remove" />
                </div>
              </div>
            )
          })
        }
    </div>
  )
};

export default ListTable
