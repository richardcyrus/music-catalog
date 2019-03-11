import React from 'react';
import { Container, Table, Form, FormControl, Button } from 'react-bootstrap';

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(`${event.target}`);
// };

function CurrentCatalog(props) {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Difficulty</th>
            <th>Duration</th>
            <th>Style</th>
            <th>Voices</th>
          </tr>
        </thead>
        <tbody>
          {props.musicCatalog.map((row) => (
            <tr key={row.id}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.difficulty}</td>
              <td>{row.duration}</td>
              <td>{row.style}</td>
              <td>{row.voices}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default CurrentCatalog;
