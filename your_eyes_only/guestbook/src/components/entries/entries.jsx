import React, { useEffect, useState } from 'react';
import './entries.css';

const GuestbookEntries = () => {
const [entries, setEntries] = useState([]);

useEffect(() => {
    fetch('http://localhost:4000/entries')
    .then((response) => response.json())
    .then((data) => setEntries(data));
}, []);

    return (
        <div>
            {entries.map((entry, index) => (
                <div className="entry-wrapper" key={index}>
                    <h3><a href="{entry.website}">{entry.name}</a></h3>
                    <p>{entry.message}</p>
                </div>
            ))}
        </div>
    );
};

export default GuestbookEntries;
