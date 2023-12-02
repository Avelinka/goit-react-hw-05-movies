import { Link } from 'react-router-dom';
import NotFound from '../images/notfound.png';
import {
  NotFoundBox,
  NotFoundImg,
  NotFoundText,
} from 'components/Helper/NotFoundPage.styled';

export default function NotFoundPage() {
  const notFoundSrc = NotFound;
  return (
    <NotFoundBox>
      <NotFoundImg src={notFoundSrc} alt="not found" loading="lazy" />
      <NotFoundText>
        Sorry! Error! Please use this <Link to="/">link</Link> to navigate to
        our home page
      </NotFoundText>
    </NotFoundBox>
  );
}
