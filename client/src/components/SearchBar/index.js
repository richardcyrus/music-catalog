import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

function SearchBar(props) {
  return (
    <Container className="py-2">
      <Form
        inline
        className="mb-2 justify-content-center"
        onSubmit={(event) => {
          props.handleSubmit(event);
        }}
      >
        <Form.Label className="mr-2">Filter by:</Form.Label>
        <FormControl
          name="attribute"
          type="text"
          placeholder="Attribute"
          className=" mr-sm-2"
          onChange={props.handleInputChange}
        />
        <Form.Label className="mr-2">Value:</Form.Label>
        <FormControl
          name="value"
          type="text"
          placeholder="Value"
          className=" mr-sm-2"
          onChange={props.handleInputChange}
        />
        <Button variant="primary" type="submit">
          Filter
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
