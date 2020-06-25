import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import data from "./data/todos.json";
import Header from "./components/Header";
import List from "./components/List";
import CreateTodoModal from "./components/CreateTodoModal";

function App() {
  const [list, setList] = useState(data);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const handleDeleteClick = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const handleCreateClick = (description) => {
    setList([...list, { id: uuidv1(), description, completed: false }]);
  };

  const handleClose = () => {
    setCreateModalVisible(false);
  };

  const handleShow = () => {
    setCreateModalVisible(true);
  };

  return (
    <Container className="p-3">
      <Header></Header>
      <Button className="m-1" onClick={handleShow}>
        Create To Do
      </Button>
      <List list={list} handleDeleteClick={handleDeleteClick}></List>
      <CreateTodoModal
        show={createModalVisible}
        handleClose={handleClose}
        handleCreateClick={handleCreateClick}
      ></CreateTodoModal>
    </Container>
  );
}

export default App;
