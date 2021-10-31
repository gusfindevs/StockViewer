import styled from 'styled-components';

/**
 * MH = Main Header
 * AS = Aside
 * CT = Content
 */

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 40px auto;

  grid-template-areas:
    'MH MH'
    'AS CT';

  height: 100vh;
`;
