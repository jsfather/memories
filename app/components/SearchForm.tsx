import React from 'react';
import Form from 'next/form';

const SearchForm = () => {
  return <Form action="/" scroll={false} className="search-form">
    <input name="query" className="search-input" defaultValue="" placeholder="Search Memories" />
  </Form>;
};

export default SearchForm;
