import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
const Forms = () => {
  const [state, setState] = useState<any>({
    fname: "",
    lname: "",
    email: "",
    comments: "",
  });
  const changeHandler = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const submitHandler = (event: any) => {
    event?.preventDefault();
    setState({
      fname: "",
      lname: "",
      email: "",
      comments: "",
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>First name:</label>
        <br></br>
        <Input
          type="text"
          name="fname"
          onchange={changeHandler}
          value={state.fname}
          placeholder="Enter First Name"
        ></Input>
        <br></br>
        <label>Last name:</label>
        <br></br>
        <Input
          type="text"
          name="lname"
          onchange={changeHandler}
          value={state.lname}
          placeholder="Enter First Name"
        ></Input>
        <br></br>
        <label>Email:</label>
        <br></br>
        <Input
          type="email"
          name="email"
          onchange={changeHandler}
          value={state.email}
          placeholder="Enter First Name"
        ></Input>
        <br></br>
        <Textarea
          name="comments"
          rows={4}
          cols={20}
          placeholder="Enter Comments"
          onchange={changeHandler}
          value={state.comments}
        ></Textarea>{" "}
        <br></br>
        <button>Submit</button>
      </form>
      <h2>OutPut</h2>
      <h3>First Name={state.fname}</h3>
      <h3>Last Name={state.lname}</h3>
      <h3>Email Name={state.email}</h3>
      <h3>Comments={state.comments}</h3>
    </React.Fragment>
  );
};

export default Forms;
