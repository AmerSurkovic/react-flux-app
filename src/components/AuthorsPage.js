import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import authorStore from "../stores/authorStore";
import { loadAuthors } from "../actions/authorActions";
import { Link } from "react-router-dom";

function AuthorsPage() {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(authorOnChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      authorStore.removeChangeListener(authorOnChange);
    };
  }, []);

  function authorOnChange() {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/author">
        Add Author
      </Link>
      <AuthorList authors={authors} />
    </>
  );
}

export default AuthorsPage;
