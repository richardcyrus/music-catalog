import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';

function SearchBar(props) {
  let dbCols = ['title', 'composer', 'arranger'];

  return (
    <Container>
      <Form inline className="mb-2 justify-content-center">
        <div className="form-group mr-1">
          <label className="mr-1">Filter By:</label>
          <select
            className="form-control"
            name="attribute"
            onChange={props.handleInputChange}
          >
            {props.dbCols.map((optionDrown) => {
              return <option>{optionDrown}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="mr-1">Value:</label>
          <FormControl
            name="value"
            type="text"
            placeholder="Value"
            className=" mr-sm-2"
            onChange={props.handleInputChange}
          />
        </div>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            props.handleSubmit(event);
          }}
        >
          Filter
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
