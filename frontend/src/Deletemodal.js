import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Deletemodal = ({ isOpen, onRequestClose, onDeleteConfirmed }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDeleteConfirmed = async () => {
    setButtonDisabled(true);
    await onDeleteConfirmed();
    setButtonDisabled(false);
  };

  useEffect(() => {
    setButtonDisabled(false);
  }, [onDeleteConfirmed]);

  // const customStyles = {
  //   content: 'h-35 w-20 mx-auto transform -translate-y-2/3 p-6 rounded-2xl bg-lightgray border-2 border-black flex flex-col items-center',
  //   buttonsContainer: 'mt-4',
  //   button: 'm-2',
  // };
  

  return (

      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Delete Confirmation"
          className="h-35 w-20 mx-auto transform -translate-y-2/3 p-6 rounded-2xl bg-lightgray border-2 border-black flex flex-col items-center mt-4 m-2"
        >
          <h5>Are you sure you want to delete this record?</h5>
          <div className='h-35 w-20 mx-auto transform -translate-y-2/3 p-6 rounded-2xl bg-lightgray border-2 border-black flex flex-col items-center'>
            <button  className="bg-red-400 m-2" onClick={handleDeleteConfirmed} disabled={buttonDisabled}>
              Yes, Delete
            </button>
            <button  className="bg-red-500 m-2" onClick={onRequestClose}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
    
 
};

export default Deletemodal;
