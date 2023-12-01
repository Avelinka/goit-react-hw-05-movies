import styled from 'styled-components';
import { Link as InfoLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(10)};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const MovieDetailsWrap = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(10)};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterWrap = styled.div`
  max-width: 300px;
  width: 100%;
  height: 450px;
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  width: 100%;
`;

export const MovieTitle = styled.h2`
  font-size: 40px;
  font-style: italic;
  text-shadow: 1px 2px 3px ${p => p.theme.colors.blue};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const UserScore = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const ScoreSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
`;

export const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const OverviewText = styled.p`
  font-size: 18px;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const GenresList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
`;

export const GenresItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  text-shadow: 1px 2px 3px ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const AdditionalWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
`;

export const AdditionalItem = styled.li`
  width: 100px;
  height: 40px;
`;

export const Link = styled(InfoLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.black};
  opacity: 0.6;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.radii.md};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
    color: ${p => p.theme.colors.white};
  }
`;
