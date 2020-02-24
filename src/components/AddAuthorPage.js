import React, { useState, useEffect } from "react";
import AuthorForm from "./AuthorForm";
import authorStore from "../stores/authorStore";
import * as authorActions from "../actions/authorActions";
import { toast } from "react-toastify";

function AddAuthorPage(props) {
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: null,
    name: ""
  });

  useEffect(() => {
    authorStore.addChangeListener(authorOnChange);
    if (authors.length === 0) {
      authorActions.loadAuthors();
    }

    return () => authorStore.removeChangeListener(authorOnChange);
  }, [authors.length]);

  function authorOnChange() {
    setAuthors(authorStore.getAuthors());
  }

  function handleChange({ target }) {
    setAuthor({
      ...author,
      [target.name]: target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    authorActions.saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author saved");
    });
  }

  return (
    <>
      <h2>Add Author</h2>
      <AuthorForm onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
}

export default AddAuthorPage;
