import React, { useState } from 'react';

import { Container } from './styles';

const Search = () => {
  const [text, setText] = useState();

  return (
    <Container>
      <form>
        <input
          type="text"
          name="text"
          placeholder="Search stock ticker... eg: ABAE"
          value=""
        />
      </form>
    </Container>
  );
};

export default Search;
