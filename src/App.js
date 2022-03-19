import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import './styles/MovieSelected.css';
import MoviesContainer from './containers/MoviesContainer/MoviesContainer';

function App() {
  return (
    <Container fluid className="App">
      <MoviesContainer />
    </Container>
  );
}

export default App;
