import './styles/style.css';
import React, { useEffect, useState } from 'react';
import GuestbookForm from './components/form.jsx';
import GuestbookEntries from './components/entries/entries.jsx';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [entryCount, setEntryCount] = useState(0); // State to track entry count

  useEffect(() => {
    fetch('http://localhost:4000/entries')
      .then((response) => response.json())
      .then((data) => {
        setEntries(data); // Pass full entries array to child
        setEntryCount(data.length); // Calculate and set entry count
      })
      .catch((error) => console.error('Error fetching entries:', error));
  }, []);

  return (
    <div>
      <div className="layout" style={{position: 'relative'}}>
        <div className="column">
          <div className="box form">
            <GuestbookForm />
          </div>
        </div>
          <GuestbookEntries entries={entries} />
      </div>
      <div className="status-bar">
        total entries: {entryCount}
      </div>
    </div>
  );
};

export default App;
