import React, { useEffect }  from 'react';

const ListSelection = ({ selectedItem }) => {

  useEffect(() => {
    console.log("Component mounted...");
  }, []);

  return (
    <div className="listSelection">
      {!selectedItem.name && "Please, make a selection."}

      {selectedItem.name}<br />
      {selectedItem.category}<br />
      {selectedItem.deliveryMethod}<br />
    </div>
  )
};

export default ListSelection;
