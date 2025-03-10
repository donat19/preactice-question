import React from 'react';

function Book({ title, author }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
    </div>
  );
}

export default Book;
