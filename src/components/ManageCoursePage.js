import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";
import * as authorActions from "../actions/authorActions";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(courseOnChange);
    authorStore.addChangeListener(authorOnChange);
    const slug = props.match.params.slug; // from the path '/courses/:slug'
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    if (authors.length === 0) {
      authorActions.loadAuthors();
    }
    return () => {
      courseStore.removeChangeListener(courseOnChange);
      authorStore.removeChangeListener(authorOnChange);
    };
  }, [authors.length, courses.length, props.match.params.slug]);

  function courseOnChange() {
    setCourses(courseStore.getCourses());
  }

  function authorOnChange() {
    setAuthors(authorStore.getAuthors());
  }

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  function handleDelete(event) {
    event.preventDefault();
    courseActions.deleteCourse(course.id).then(() => {
      props.history.push("/courses");
      toast.error("Course deleted.");
      courseActions.loadCourses();
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        authors={authors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ManageCoursePage;
