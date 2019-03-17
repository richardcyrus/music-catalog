import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const showNonNullRowData = (rowData) => {
  let nonNullValues = [];
  for (const key in rowData) {
    if (rowData.hasOwnProperty(key)) {
      const element = rowData[key];
      if (
        element !== null &&
        element !== '' &&
        key !== 'id' &&
        key !== 'title'
      ) {
        nonNullValues.push(
          `${key.charAt(0).toLocaleUpperCase()}${key.slice(1)}: ${element}`
        );
      }
    }
  }
  console.log(nonNullValues);
  return nonNullValues;
};

function Detail(props) {
  const { rowData } = props;
  return (
    <div className="h-100 justify-content-center">
      <Card style={{ width: '50rem' }} className="mx-auto ">
        <Card.Header className="text-center">{rowData.title}</Card.Header>
        <Card.Body>
          {showNonNullRowData(rowData).map((element) => (
            <p key={element}>{element}</p>
          ))}
        </Card.Body>
        {/* <ListGroup variant="flush">
    <ListGroup.Item>Description:{rowData.description}</ListGroup.Item>
    <ListGroup.Item>Genres:{rowData.genres}</ListGroup.Item>
    <ListGroup.Item>Difficulty:{rowData.difficulty}</ListGroup.Item>
    <ListGroup.Item>Duration:{rowData.duration}</ListGroup.Item>
    <ListGroup.Item>Editors:{rowData.dditors}</ListGroup.Item>
    <ListGroup.Item>Publisher:{rowData.publisher}</ListGroup.Item>
  </ListGroup> */}
      </Card>
    </div>
  );
}

export default Detail;
