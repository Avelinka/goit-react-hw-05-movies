import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { IoMdHome } from 'react-icons/io';
import { IoMdFilm } from 'react-icons/io';

import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import {
  Layout,
  Header,
  Navigation,
  NavList,
  NavListItem,
  NavLink,
  Main,
} from './Layout';

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <Navigation>
          <NavList>
            <NavListItem>
              <NavLink to="/">
                <IoMdHome size="20" />
                Home
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/movies">
                <IoMdFilm size="20" />
                Movies
              </NavLink>
            </NavListItem>
          </NavList>
        </Navigation>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>

      <GlobalStyle />
      <Toaster position="top-right" />
    </Layout>
  );
};
