import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import MoviesContainer from './containers/MoviesContainer/MoviesContainer';

function App() {
  return (
    <Container className="fluid App">
      <MoviesContainer />
    </Container>
  );
}

export default App;
