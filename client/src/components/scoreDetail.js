import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const showNonNullRowData = (rowData) => {
  let nonNullValues = [];

  for (let key in rowData) {
    if (key === 'performed') {
      continue;
    }
    if (rowData.hasOwnProperty(key)) {
      const element = rowData[key];

      if (
        element !== null &&
        element !== '' &&
        key !== 'id' &&
        key !== 'title'
      ) {
        if (key === 'purchasePrice') {
          key = 'Cost';
        }
        if (key === 'quantityOnHand') {
          key = 'Copies';
        }

        nonNullValues.push(
          `${key.charAt(0).toLocaleUpperCase()}${key.slice(1)}: ${element}`
        );
      }
    }
  }
  // console.log(nonNullValues);
  return nonNullValues;
};

const Detail = (props) => {
  const { rowData, toggleToFalse } = props;

  return (
    <div className="justify-content-center">
      <Card style={{ width: '50rem' }} className="mx-auto">
        <Card.Header className="text-center bg-dark text-white">
          {rowData.title}
        </Card.Header>
        <Card.Body>
          {showNonNullRowData(rowData).map((element) => (
            <p key={element}>{element}</p>
          ))}
        </Card.Body>
      </Card>
      <div className="text-center">
        <Button
          variant="primary"
          size="lg"
          className="mt-2"
          onClick={() => toggleToFalse()}
        >
          Back to Library
        </Button>
      </div>
    </div>
  );
};

export default Detail;
