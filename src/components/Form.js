import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Город" />
      <button> Узнать погоду </button>
    </form>
  )
}

export default Form;
