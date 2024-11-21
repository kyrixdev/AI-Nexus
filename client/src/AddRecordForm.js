import axios from 'axios';
import React, { useState } from 'react';

const AddRecordForm = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [name, setName] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/add-record', { imgUrl, name, siteUrl, category, description });

    setImgUrl('');
    setName('');
    setSiteUrl('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imgUrl">Image URL:</label>
      <input
        type="text"
        id="imgUrl"
        value={imgUrl}
        onChange={(event) => setImgUrl(event.target.value)}
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="siteUrl">Site URL:</label>
      <input
        type="text"
        id="siteUrl"
        value={siteUrl}
        onChange={(event) => setSiteUrl(event.target.value)}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <button type="submit" className='border border-style-solid border-black'>Add Record</button>
    </form>
  );
};

export default AddRecordForm;
