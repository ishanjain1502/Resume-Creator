import React , { useState, useContext }  from "react";
import {ContactContext} from "../store/provider";

function Input() {

    const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [state,dispatch] = useContext(ContactContext);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleAddress(event) {
    setAddress(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
        type:'submit',
        payload:{
          name:name,
          subtitle:title,
          website:address
        }
      })
  }
  return (
    <form>
      <input type="text" placeholder="Your Name" onChange={handleName} />
      <input type="text" placeholder="Title" onChange={handleTitle} />
      <input type="text" placeholder="Address" onChange={handleAddress} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Input;
