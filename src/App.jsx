import React from 'react';
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  // Book data
  const books = [
    { title: "Java Programming", author: "Ivor Horton" },
    { title: "HTML & CSS", author: "Tim Berner's Lee" },
    { title: "React JS", author: "A.Kurdi" },
    { title: "Angular JS", author: "R. Lafore II" },
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <BookList books={books} />
      </main>
    </div>
  );
}

export default App;
