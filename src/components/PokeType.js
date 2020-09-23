import * as React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { uppercaseWord } from 'helper/shared';
import { getType } from 'helper/pokemonHelpers';

const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: ${props => props.width}%;
  margin-right: 5px;
  margin-top: 5px;
`;

const PokeType = props => {
  return (
    <StyledButton
      typeName={getType(props.type)}
      width={props.width}
      shape='round'
      size='small'
    >
      {uppercaseWord(props.type)}
    </StyledButton>
  );
};

export default PokeType;
