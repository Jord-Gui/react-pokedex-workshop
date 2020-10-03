<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import { loadPokemon } from 'helper/pokemonHelpers';
=======
import React from 'react';
import { Button, Card } from 'antd';
>>>>>>> 45e66452e4488725359a71bcf96e15964d651ab1
import styled from 'styled-components';
import PokeCard from 'components/PokeCard';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonResults = await loadPokemon();
        setPokemon(pokemonResults.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        <PokeCard />
      </Row>
    </StyledContainer>
  );
};

export default App;
