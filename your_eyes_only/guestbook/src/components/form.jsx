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
    <fieldset>
      <legend>Sign the Guestbook</legend>
      <p>Messages are moderated and may take a few days to appear on the site. Thank you for signing &lt;3</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} required />
        </div>
        <div className="field">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} required />
        </div>
        <div className="field">
          <label htmlFor="name">Website</label>
          <input type="url" name="website" placeholder="http://" onChange={handleChange} value={formData.website} />
        </div>
        <div className="field">
          <label htmlFor="name">Instagram</label>
          <input type="url" name="instagram" placeholder="@" onChange={handleChange} value={formData.website} />
        </div>
        <div className="field">
          <label htmlFor="message">What is your favorite part of the site?</label>
          <textarea name="favorite" onChange={handleChange} value={formData.message} rows="5" required></textarea>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" onChange={handleChange} value={formData.message} rows="5" required></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </fieldset>
  );
};

export default GuestbookForm;
