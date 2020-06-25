import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import data from "./data/todos.json";
import Header from "./components/Header";
import List from "./components/List";
import CreateTodoModal from "./components/CreateTodoModal";
import { useGetData } from "./hooks/useGetData";
import axios from "axios";

function App() {
  const { data, error, loading, setData } = useGetData(
    "https://139a07cc9bd0.ngrok.io/api/v1/resources/todos/all"
  );
  const [list, setList] = useState(data);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const handleDeleteClick = (id) => {
    axios.delete(
      `https://139a07cc9bd0.ngrok.io/api/v1/resources/todos?id=${id}`
    );
    getNewData();
  };

  const handleCreateClick = async (description) => {
    await axios.post(
      `https://139a07cc9bd0.ngrok.io/api/v1/resources/todos?description=${description}&completed=0`
    );
    getNewData();
  };

  const handleClose = () => {
    setCreateModalVisible(false);
  };

  const handleShow = () => {
    setCreateModalVisible(true);
  };

  const getNewData = async () => {
    const newList = await axios.get(
      "https://139a07cc9bd0.ngrok.io/api/v1/resources/todos/all"
    );
    setData(newList.data);
  };
  if (data) {
    return (
      <Container className="p-3">
        <Header></Header>
        <Button className="m-1" onClick={handleShow}>
          Create To Do
        </Button>
        <List list={data} handleDeleteClick={handleDeleteClick}></List>
        <CreateTodoModal
          show={createModalVisible}
          handleClose={handleClose}
          handleCreateClick={handleCreateClick}
        ></CreateTodoModal>
      </Container>
    );
  }
  return "";
}

export default App;
