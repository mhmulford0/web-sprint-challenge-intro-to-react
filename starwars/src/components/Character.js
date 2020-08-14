import React from 'react'
import styled from 'styled-components';


const StlyedCharacter = styled.div`
  border: 1px solid black;
  margin: 2% auto;
  padding: 2%;
  background-color: ${props => props.theme.primaryColor};
  h3 {
    width: 100%;
    color: black;
    font-size: 45px;
    margin: 1rem 0;
    text-align: center;
  }
  p {
    font-size: 22px;
    margin: 0.5rem 0;
  }

  p img {
    height: 325px;
    transform: scale(1);
    transition: .3s ease-out;
  }
  transition: background-color 0.3s ease-in;
  width: 40vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;

  &:hover {
    background-color: rgba(0, 240, 220, 0.77);
    transition: background-color 0.3s ease-out;
  }

  img:hover {
      transform: scale(1.11);
      transition: .3s ease-in;
    }

`;


function Character(props) {
  const { character } = props
  return (
    <StlyedCharacter>
      <h3>{character.name}</h3>
      <p><img src={character.image} alt="" /></p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </StlyedCharacter>

  )
}

export default Character
