import React from "react";
import PropTypes from "prop-types";

function Dropdown(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value || ""}
          className="form-control"
        >
          <option value="" />
          {props.options.map(option => {
            return <option value={option.id}>{option.name}</option>;
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

Dropdown.defaultProps = {
  error: ""
};

export default Dropdown;
