import React, { useEffect, useState } from 'react';

const GuestbookEntries = () => {
const [entries, setEntries] = useState([]);
const [entryCount, setEntryCount] = useState(0); // Track total entry count

useEffect(() => {
    fetch('http://localhost:4000/entries')
    .then((response) => response.json())
    .then((data) => {
        setEntries(data);
        setEntryCount(data.length); 
    })
    .catch((error) => console.error('Can\'t fetch entries:', error));
}, []);

    return (
        <div className="column">
            {entries.map((entry, index) => (
                <div className="box" key={entry.id}>
                    <fieldset>
                        <legend>{index + 1}. {entry.name}</legend>
                        <p>{entry.message}</p>
                        <p>
                            {entry.website && (
                                <>
                                <a href={entry.website} target="_blank" rel="noopener noreferrer">
                                    Website
                                </a>
                                </>
                            )}
                            
                            {entry.website && entry.instagram && ' | '}
                            
                            {entry.instagram && (
                                <>
                                <a
                                    href={`https://instagram.com/${entry.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                                </>
                            )}
                        </p>
                    </fieldset>
                </div>
            ))}
        </div>
    );
};

export default GuestbookEntries;
