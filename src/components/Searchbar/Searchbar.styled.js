import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
  margin: 0 auto ${p => p.theme.spacing(10)};
`;

export const Field = styled.input`
  display: block;
  width: 480px;
  height: 100%;
  font-size: 20px;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 0 ${p => p.theme.spacing(3)};

  &::placeholder {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.blue};
  color: inherit;
  font-size: 18px;
  font-weight: 500;
  width: 120px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  padding: 0;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;
