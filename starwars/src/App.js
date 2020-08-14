import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';

import axios from 'axios';

import Character from './components/Character'

import './App.css';
import theme from "./Theme";


const StlyedApp = styled.div`
  text-align: center;
  font-size: 50px;
  h1 {
    color: white;
  }
  font-family: 'Roboto', sans-serif;
`;


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })

  }, [page])

  return (
    <ThemeProvider theme={theme}>
      <StlyedApp>
        <div className="App">
          <h1>Characters</h1>
          {characters.map(character => {
            return <Character key={character.id} character={character} />
          })}
        </div>
        <button onClick={(event) => {
          if (page > 1) {
            setPage(page - 1)
          }
        }}>Last Page</button>
        <button onClick={(event) => {
          if (page >= 1) {
            setPage(page + 1)
          }
        }}>Next Page</button>
      </StlyedApp>
    </ThemeProvider>
  );
}

export default App;
