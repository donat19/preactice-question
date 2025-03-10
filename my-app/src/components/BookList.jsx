import React from 'react';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>Available Books</h2>
      {books.map((book, index) => (
        <Book 
          key={index} 
          title={book.title} 
          author={book.author} 
        />
      ))}
    </div>
  );
}

export default BookList;
