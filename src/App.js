import React from 'react';
import { Container } from 'react-bootstrap';

import './styles/queries.css';
import './App.css';
import './styles/MovieSelected.css';
import './styles/Header.css';

import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <MoviesContainer />
    </Container>
  );
}

export default App;
