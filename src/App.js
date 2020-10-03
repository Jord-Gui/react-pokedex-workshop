import React from 'react';
<<<<<<< HEAD
import { Row } from 'antd';
import PokeCard from 'components/PokeCard';
=======
import { Button, Card } from 'antd';
>>>>>>> 45e66452e4488725359a71bcf96e15964d651ab1
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const App = () => {
  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        <PokeCard />
      </Row>
    </StyledContainer>
  );
};

export default App;
