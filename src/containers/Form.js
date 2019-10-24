import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  const { addTodo } = props

  const [value, setValue] = useState('')

  const onChange = ({ target: { value: newValue } }) => {
    setValue(newValue)
  }

  const onClickBotao = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <div>
      <p>Adicionar ToDo</p>
      <input value={value} onChange={onChange} />
      <button onClick={onClickBotao}>
        adicionar
      </button>
    </div>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Form;