import styled from 'styled-components';

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-style: italic;
  text-align: center;

  text-shadow: 1px 2px 3px ${p => p.theme.colors.blue};
  margin-bottom: ${p => p.theme.spacing(10)};
`;
