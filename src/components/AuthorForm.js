import React, { useState } from "react";
import TextInput from "./common/TextInput";
import authorStore from "../stores/authorStore";

function AuthorForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="name"
          label="Name"
          onChange={props.onChange}
          name="name"
        />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </>
  );
}

export default AuthorForm;
