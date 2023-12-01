import styled from 'styled-components';
import { Link as MovieLink } from 'react-router-dom';

export const MovieListItem = styled.li`
  max-width: 300px;
  width: 100%;
  height: 500px;
  background-color: ${p => p.theme.colors.lightblue};
  color: ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
    transform: scale(1.01);
  }

  @media (max-width: 340px) {
    max-width: 280px;
  }
`;

export const Link = styled(MovieLink)`
  color: inherit;
`;

export const MovieImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const MovieTitleWrapper = styled.div`
  height: 50px;
  padding: 0 ${p => p.theme.spacing(3)};
  display: flex;
  align-items: center;
`;

export const MovieTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
