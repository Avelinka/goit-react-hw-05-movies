import { IoMdSearch } from 'react-icons/io';

import { Form, Field, SearchBtn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit: getQuery }) => {
  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        const query = evt.target.input.value;
        getQuery(query.trim().toLowerCase());
        evt.target.reset();
      }}
    >
      <Field
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="input"
      />
      <SearchBtn type="submit">
        <IoMdSearch size="24" />
      </SearchBtn>
    </Form>
  );
};
