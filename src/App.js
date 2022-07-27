import React, { useState } from 'react';
import useBookSearch from './useBookSearch';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useBookSearch(query, pageNumber);
  return (
    <React.Fragment>
      <input type= "text"></input>  
      <div>Book Title</div>
      <div>Book Title</div>
      <div>Book Title</div>
      <div>Book Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </React.Fragment>
  );
}

export default App;
