import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem from "./ListItem";

export default ({ list, handleDeleteClick }) => {
  console.log(list);
  console.log(list[0]);
  return (
    <ListGroup className="m-1">
      {list.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          handleDeleteClick={handleDeleteClick}
        ></ListItem>
      ))}
    </ListGroup>
  );
};
