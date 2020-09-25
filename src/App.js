import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import { loadPokemon } from 'helper/pokemonHelpers';
import styled from 'styled-components';
import PokeCard from 'components/PokeCard';
import PokeModal from 'components/PokeModal';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const loadedPokemon = async () => {
      try {
        const apiResponse = await loadPokemon();
        setPokemon(apiResponse.results);
      } catch (err) {
        console.log(err);
      }
    };

    loadedPokemon();
  }, []);

  return (
    <StyledContainer className='site-card-wrapper'>
      {selectedPokemon !== null ? (
        <PokeModal
          pokemonDetail={selectedPokemon}
          changeSelected={setSelectedPokemon}
        />
      ) : null}
      <Row>
        {pokemon?.map(selectedPokemon => (
          <PokeCard
            key={selectedPokemon.name}
            name={selectedPokemon.name}
            url={selectedPokemon.url}
            changeSelected={setSelectedPokemon}
          />
        ))}
      </Row>
    </StyledContainer>
  );
};

export default App;
