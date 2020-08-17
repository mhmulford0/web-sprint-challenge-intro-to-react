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

  button {
    box-shadow:inset 0px -3px 7px 0px #29bbff;
    background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
    background-color:#2dabf9;
    border-radius:3px;
    border:1px solid #0b0e07;
    display:inline-block;
    cursor:pointer;
    font-size:20px;
    padding:9px 23px;
    text-decoration:none;
    text-shadow:0px 1px 0px #263666;
    margin: 2rem 1rem;
  }

  button:hover {
    background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
	background-color:#0688fa;
  }
  button:active {
    position:relative;
	top:1px;
  }
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
        {page > 1 && <button onClick={(event) => {
          if (page > 1) {
            window.scrollTo(0, 0);
            setPage(page - 1)
          }
        }}>Last Page</button>}
        <button onClick={(event) => {
          if (page >= 1 && page < 35) {
            setPage(page + 1);
            window.scrollTo(0, 0)
          }
        }}>Next Page</button>
      </StlyedApp>
    </ThemeProvider>
  );
}

export default App;
