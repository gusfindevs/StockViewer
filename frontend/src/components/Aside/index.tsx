import React from 'react';

import {
  Container,
  Header,
  MenuContainer,
  MenuItemLink,
  Title,
} from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>StockViewer</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">Stocks Dashboard</MenuItemLink>

        <MenuItemLink href="#">Screener Dashboard</MenuItemLink>

        <MenuItemLink href="#">Exit</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
