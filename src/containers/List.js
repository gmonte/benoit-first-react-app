import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  const { list, removeTodo } = props

  return (
    <ul>
      {
        list.map((todo, index) => (
          <li key={index} onClick={ () => removeTodo(index) }>{todo}</li>
        ))
      }
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default List;