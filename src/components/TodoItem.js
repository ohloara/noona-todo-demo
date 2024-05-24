import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({item, toggleComplete, deleteTask}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={item.isComplete ? "todo-item complete":"todo-item"}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={()=>deleteTask(item._id)}>삭제</button>
            <button className="button-delete"
              onClick={()=>toggleComplete(item._id)}
            >
              {item.isComplete ? '안끝남':'끝남'}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
