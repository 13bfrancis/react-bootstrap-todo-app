import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default ({ show, handleClose, handleCreateClick }) => {
  const [description, setDescription] = useState("");

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New To Do</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Get milk from the store"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></Form.Control>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleCreateClick(description);
            handleClose();
            setDescription("");
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
