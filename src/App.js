import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Space } from 'antd';
import {
  getBackgroundType,
  getPokemonImage,
  getType,
  loadPokemon
} from 'helper/pokemonHelpers';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: ${props => props.width}%;
  margin-right: 5px;
  margin-top: 5px;
`;

const StyledCard = styled(Card)`
  background-color: ${props => props.typeName};
  margin: 30px;
  height: 180px;
  border-radius: 27px;
  color: white;

  :hover {
    cursor: pointer;
    float: top;
  }

  .ant-card-body {
    padding: 20px;
  }
`;

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const StyledImage = styled.img`
  width: 80%;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: white;
`;

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const name = 'Bryan Wong';
 
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
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Row>
        <Col span={8}>
          <StyledCard typeName={getBackgroundType('grass')}>
            <Space align='start'>
              <div>
                <StyledTitle>Bulbasaur</StyledTitle>
                <StyledButton
                  typeName={getType('grass')}
                  width={'100'}
                  shape='round'
                  size='small'
                >
                  Grass
                </StyledButton>
                <StyledButton
                  typeName={getType('poison')}
                  width={'100'}
                  shape='round'
                  size='small'
                >
                  Poison
                </StyledButton>
              </div>
              <StyledImage alt='' src={getPokemonImage('1')} />
            </Space>
          </StyledCard>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default App;
