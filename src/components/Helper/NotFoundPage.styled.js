import styled from 'styled-components';

export const NotFoundBox = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: ${p => p.theme.spacing(5)};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
`;

export const NotFoundImg = styled.img`
  max-width: 800px;
  width: 100%;
`;

export const NotFoundText = styled.p`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;
