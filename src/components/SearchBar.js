import React from 'react';
import { Form } from 'react-bootstrap';

export const SearchBar = ({ search, setSearch }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Form>
    );
};
