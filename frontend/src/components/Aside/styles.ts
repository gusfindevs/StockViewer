import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  background-color: #ffffff;
`;

export const Header = styled.header`
  border-bottom: 1px solid rgb(234, 237, 237);
  padding-left: 20px;
`;

export const Title = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  padding-left: 20px;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;

  text-decoration: none;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
