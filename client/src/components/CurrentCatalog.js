import React from 'react';
import { Container, Table, Form, FormControl } from 'react-bootstrap';
// import { Container, Col, Row } from 'react-bootstrap'

function CurrentCatalog(props) {
  console.log(props);
  return (
    <Container className="py-2">
      <Form inline className="mb-2 justify-content-center">
        <Form.Label className="mr-2">Filter by:</Form.Label>
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          onClick={() => {
            props.propFunction(comp);
          }}
        />
        <Form.Label className="mr-2">Value:</Form.Label>
        <FormControl type="text" placeholder="Value" className=" mr-sm-2" />
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
