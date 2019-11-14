import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { list, removeTodo } = props;

  return (
    <ul>
      {list.map(({ name, id }) => (
        <li key={id} onClick={() => removeTodo(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default List;
