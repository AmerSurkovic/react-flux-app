import React from "react";
import TextInput from "./common/TextInput";
import Dropdown from "./common/Dropdown";
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

        <Dropdown
          id="author"
          label="Author"
          name="authorId"
          onChange={props.onChange}
          value={props.course.authorId}
          options={props.authors}
          error={props.errors.authorId}
        />

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
