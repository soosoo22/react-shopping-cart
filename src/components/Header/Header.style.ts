import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  background-color: #000000;
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 1;
  cursor: pointer;

  img {
    margin-left: 24px;
  }

  .header_logo {
    width: 56px;
  }

  .header_arrow {
    width: 32px;
  }
`;
