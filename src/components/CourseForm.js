import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <>
      <form>
        <TextInput
          id="title"
          label="Title"
          onChange={props.onChange}
          name="title"
          value={props.course.title}
          error={props.errors.title}
        />

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              value=""
              className="form-control"
              onChange={props.onChange}
              value={props.course.authorId || ""}
            >
              <option value="" />
              <option value="1">Cory House</option>
              <option value="2">Scott Allen</option>
            </select>
          </div>
          {props.errors.authorId && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
          )}
        </div>

        <TextInput
          id="category"
          label="Category"
          name="category"
          onChange={props.onChange}
          value={props.course.category}
          error={props.errors.category}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-primary"
          onClick={props.onSubmit}
        />
        <input
          type="submit"
          value="Delete"
          className="btn btn-danger"
          onClick={props.onDelete}
        />
      </form>
    </>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
