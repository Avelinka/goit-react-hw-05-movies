import styled from 'styled-components';
import { NavLink as ItemLink } from 'react-router-dom';
import { Link as BackLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(10)};
`;

export const Header = styled.header`
  padding: ${p => p.theme.spacing(5)} 0;
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const Navigation = styled.nav`
  max-width: 1600px;
  padding: 0 ${p => p.theme.spacing(4)};
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`;

export const NavListItem = styled.li`
  width: 120px;
  height: 40px;
`;

export const NavLink = styled(ItemLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  color: ${p => p.theme.colors.black};
  opacity: 0.6;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.md};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &.active {
    opacity: 1;
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.white};
  }
`;

export const Main = styled.main`
  max-width: 1600px;
  width: 100%;
  padding: 0 ${p => p.theme.spacing(4)} ${p => p.theme.spacing(5)};
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Link = styled(BackLink)`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.black};
  opacity: 0.6;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.radii.md};
  margin-bottom: ${p => p.theme.spacing(10)};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) opacity 250ms
    cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
    color: ${p => p.theme.colors.white};
  }
`;
