import React from 'react';
import { Card } from 'antd';
import { getPokemonImage } from 'helper/pokemonHelpers';

const App = () => {
  const name = 'Bryan Wong';

  return (
    <div>
      <h1>Hi there, my name is {name}! Welcome to my Pokedex!</h1>
      <p>Hi Im a paragraph in React</p>
      <Card>
        <img alt='' src={getPokemonImage('1')} />
      </Card>
    </div>
  );
};

export default App;
