import React from 'react';
import { Container } from 'react-bootstrap';

import './styles/queries.css';
import './App.css';
import './styles/MovieSelected.css';
import './styles/MovieInfo.css';
import './styles/Header.css';
import './styles/Footer.css';

import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <MoviesContainer />
      <Footer />
    </Container>
  );
}

export default App;
