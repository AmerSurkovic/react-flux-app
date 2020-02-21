import dispatcher from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./actionTypes";

export function saveAuthor(author) {
  return authorApi.saveAuthor(author).then(savedAuthor => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_AUTHOR,
      author: savedAuthor
    });
  });
}

export function loadAuthors() {
  return authorApi.getAuthors().then(authors => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors
    });
  });
}
