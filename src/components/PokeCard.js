import React from 'react';
import { Button, Card, Col, Space } from 'antd';
import {
  getBackgroundType,
  getPokemonImage,
  getType
} from 'helper/pokemonHelpers';
import styled from 'styled-components';
import PokeType from 'components/PokeType';

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

const StyledImage = styled.img`
  width: 80%;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: white;
`;

const PokeCard = () => {
  return (
    <Col span={8}>
      <StyledCard typeName={getBackgroundType('grass')}>
        <Space align='start'>
          <div>
            <StyledTitle>Bulbasaur</StyledTitle>
            <PokeType type='grass' width={'100'} />
            <PokeType type='poison' width={'100'} />
          </div>
          <StyledImage alt='' src={getPokemonImage('1')} />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
