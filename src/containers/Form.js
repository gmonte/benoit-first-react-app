import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v1";

const Form = props => {
  const { addTodo } = props;

  const [value, setValue] = useState("");

  const onChange = ({ target: { value: newValue } }) => {
    setValue(newValue);
  };

  const onClickBotao = () => {
    addTodo({
      id: uuid(),
      name: value
    });
    setValue("");
  };

  return (
    <div>
      <p>Adicionar ToDo</p>
      <input value={value} onChange={onChange} />
      <button onClick={onClickBotao}>adicionar</button>
    </div>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Form;
