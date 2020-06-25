import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default ({ id, description, handleDeleteClick }) => (
  <ListGroup.Item className="list-item">
    <div className="grow">{description}</div>
    <div
      className="delete-btn"
      onClick={() => {
        handleDeleteClick(id);
      }}
    >
      X
    </div>
  </ListGroup.Item>
);
