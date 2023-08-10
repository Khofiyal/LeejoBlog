import React from 'react';
import axios from 'axios';

const DeleteItem = ({ PostId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/models/Post/${PostId}`);
      console.log('Item deleted successfully');
      // Perform necessary state updates or actions after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (

    <button onClick={handleDelete}>
      Delete Post
    </button>
  );
};

export default DeleteItem;
