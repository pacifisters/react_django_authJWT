import React from "react";


function List(props) {
  function handleClick() {
    props.deletion(props.id)
  }
  return (
    <div className="note">
      <h1 >  Title: {props.title} </h1>
      <p> Description: {props.description}</p>
      <p> Done: {props.done}</p>
      <p>{props.my_file}</p>
      <img src={props.my_file} ></img>
      <button onClick={handleClick}>Delete</button>
      </div>
  )
}

export default List;
