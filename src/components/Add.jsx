import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";

const Add = () => {
  const navigate = useNavigate(); // used for navigate to another component
  const [addUser, setAddUser] = useState({
    author: "",
    title: "",
    isbn: "",
    pubdate: "",
    authorname: "",
    birth: "",
    description: "",
  }); // useState for create new users
  const validationSchema = Yup.object().shape({
    author: Yup.string().required("Author Name Required"), //Formik Errors
    title: Yup.string().required("Book Name Required"), //Formik Errors
    isbn: Yup.string().required("ISBN Required"), //Formik Errors
    pubdate: Yup.string().required("Publication Date Required"), //Formik Errors
    authorname: Yup.string().required("Author Name Required"), //Formik Errors
    birth: Yup.string().required("Date of Birth Required"), //Formik Errors
    description: Yup.string().required("Book short Biography Required"), //Formik Errors
  });
  const addData = async (values) => {
    await axios
      .post("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Book", values) // formik.values
      .then((res) => {
        toast.success("User Created");
        navigate("/")
      })
      .catch((res) => {
        toast.error("Error Occured");
      });
  };
  const formik = useFormik({
    initialValues: {
      author: "",
      title: "",
      isbn: "",
      pubdate: "",
      authorname: "",
      birth: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: addData,
  });  // useformik is used for validation of forms applying the intial value , validationSchema(to display the error message and required characters for that field), OnSubmit

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Add Detail Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label for="id" class="form-label">
              ID
            </label>
            <input
              type="text"
              class="form-control"
              id="id"
              placeholder="Enter your ID"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Author
            </label>
            <input
              type="text"
              class="form-control"
              name="author"
              placeholder="Enter author name"
              value={formik.values.author}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.author}</div>
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              name="title"
              placeholder="Enter Book Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.title}</div>
          </div>
          <div class="mb-3">
            <label for="isbn" class="form-label">
              ISBN
            </label>
            <input
              type="number"
              class="form-control"
              name="isbn"
              placeholder="Enter the ISBN No"
              value={formik.values.isbn}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.isbn}</div>
          </div>
          <div class="mb-3">
            <label for="pubdate" class="form-label">
              Publication Date
            </label>
            <input
              type="date"
              class="form-control"
              name="pubdate"
              placeholder="Enter Publication Date"
              value={formik.values.pubdate}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.pubdate}</div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Author Name
            </label>
            <input
              type="text"
              class="form-control"
              name="authorname"
              placeholder="Enter author name"
              value={formik.values.authorname}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.authorname}</div>
          </div>
          <div class="mb-3">
            <label for="birth" class="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              class="form-control"
              name="birth"
              placeholder="Enter your Date of Birth"
              value={formik.values.birth}
              onChange={formik.handleChange}
            />
            <br />
            <div className="text-danger">{formik.errors.birth}</div>
          </div>
          <div class="mb-3">
            <label for="Des" class="form-label">
              Short Biography
            </label>
            <input
              type="text"
              class="form-control"
              name="description"
              placeholder="Enter your  Short Biography"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <br />
            <div className="text-danger">{formik.errors.description}</div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
