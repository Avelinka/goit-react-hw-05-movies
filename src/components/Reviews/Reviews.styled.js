import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
`;

export const ReviewsItem = styled.li`
  padding: ${p => p.theme.spacing(5)};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.lightblue};
`;

export const ReviewsAutor = styled.h3`
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const ReviewsText = styled.p`
  font-weight: 500;
`;
