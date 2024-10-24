import React, { useState } from 'react';

const GuestbookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        website: '',
        message: ''
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input type="url" name="website" placeholder="Website" onChange={handleChange} value={formData.website} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} required></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>All comments are moderated and make take a while to be published.</p>
    </div>
  );
};

export default GuestbookForm;
