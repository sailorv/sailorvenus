import React, { useEffect, useState } from 'react';

const GuestbookEntries = () => {
const [entries, setEntries] = useState([]);

useEffect(() => {
    fetch('http://localhost:4000/entries')
    .then((response) => response.json())
    .then((data) => setEntries(data));
}, []);

    return (
        <div className="column">
            {entries.map((entry, index) => (
                <div className="box">
                    <fieldset key={index}>
                        <legend>{index + 1}. {entry.name}</legend>
                        <p>{entry.message}</p>
                        <p><a href="{entry.website}">Website</a> | <a href="{entry.website}">Instagram</a></p>
                    </fieldset>
                </div>
            ))}
        </div>
    );
};

export default GuestbookEntries;
