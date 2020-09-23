import React from 'react';
import { Card, Col, Space } from 'antd';
import { getBackgroundType, getPokemonImage } from 'helper/pokemonHelpers';
import PokeType from 'components/PokeType';
import styled from 'styled-components';

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
