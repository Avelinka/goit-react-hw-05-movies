import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Formik } from 'formik';
import { IoMdSearch } from 'react-icons/io';

import { Form, SearchBtn, Field } from './Searchbar.styled';

export default function Searchbar({ addQuery }) {
  const [params, setParams] = useSearchParams();
  const searchQuery = params.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    addQuery(searchQuery);
  }, [searchQuery, addQuery]);

  const handleSubmit = (values, action) => {
    const query = values.query.trim().toLowerCase();
    const newParams = query !== '' ? { query } : {};
    setParams(newParams);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
        <SearchBtn type="submit">
          <IoMdSearch size="24" />
          Search
        </SearchBtn>
      </Form>
    </Formik>
  );
}
