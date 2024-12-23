import React, { useState } from 'react';

const GuestbookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    instagram: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // Thank you message.

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
        throw new Error('Failed to submit the entry');
      }
      setSubmitted(true); // Show thank-you message on success
    } catch (error) {
      console.error('Error submitting entry:', error);
    }
  };

  return (
    <>
      {submitted ? (
        <div>
          <fieldset>
                <legend>Thank you for signing!</legend>
                <p style={{marginRight: '30px'}}>It may take a few days for your message to appear since all messages are moderated.</p>
              </fieldset>
              <p>
                <a href="/"><img src="https://bettysgraphics.neocities.org/images/web%20graphics/icons/leave%202.gif" alt="Go Back" /></a>
              </p>
        </div>
      ) : (
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
              <input type="text" name="instagram" placeholder="@" onChange={handleChange} value={formData.instagram} />
            </div>
            <div className="field">
              <label htmlFor="name">Rate This Website</label>
              <input type="text" name="instagram" onChange={handleChange} value={formData.instagram} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" onChange={handleChange} value={formData.message} rows="3" required></textarea>
            </div>
            <div className="buttons">
              <button type="submit">Cry</button>
              <button type="submit">Breathe</button>
              <button type="submit">Dream</button>
            </div>
          </form>
        </fieldset>
        )}
    </>
  );
};

export default GuestbookForm;
