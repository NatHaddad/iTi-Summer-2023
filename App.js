import React, { useEffect, useHistory } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import Movies from './component/movies';
import Home from './component/home';
import About from './component/about';
import moviedetails from './component/moviedetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesContainer />} />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function MoviesContainer() {
  // Assuming you have an array of movies
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ];

  const history = useHistory();

  function handlePagination(pageNumber) {
    const queryParams = new URLSearchParams(window.location.search);

    queryParams.set('page', pageNumber);

    history.push({
      search: queryParams.toString()
    });
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-container">
          <Movies movie={movie} />
        </div>
      ))}
      <Pagination handlePagination={handlePagination} />
    </div>
  );
}

function Pagination({ handlePagination }) {
  return (
    <div className="pagination">
      <button onClick={() => handlePagination(1)}>1</button>
      <button onClick={() => handlePagination(2)}>2</button>
      <button onClick={() => handlePagination(3)}>3</button>
    </div>
  );
}

export default App;
