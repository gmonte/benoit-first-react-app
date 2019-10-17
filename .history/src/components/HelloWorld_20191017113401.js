import React from 'react'

const HelloWorld = (props) => {(
  <h3>Hello { props.name || 'world' }!!!</h3>
)

export default HelloWorld