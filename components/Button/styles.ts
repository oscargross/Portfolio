import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background-color: #08a800;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 21px;
  transition: background-color 200ms;

  &:hover {
    background-color: #09bf00;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    font-size: 19px;
  }
`;
