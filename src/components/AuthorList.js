import React from "react";

function AuthorList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map(author => {
          return (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AuthorList;
