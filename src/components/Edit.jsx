import Loading from "./Loading";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const Edit = ({ userId }) => {
  const navigate = useNavigate(); // navigate to another Component
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState({
    author: "",
    title: "",
    isbn: "",
    pubdate: "",
    authorname: "",
    birth: "",
    description: "",
  });
  useEffect(() => {
    fetchById(); // render before dom loading
  }, []);
  const fetchById = async () => {
    await axios
      .get(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Book/${userId}`) // fetch the data by id
      .then((res) => {
        setLoading(false);
        setEditData(res.data);
      })
      
  };
  const editForm = async (values) => {
    await axios
      .put(
        `https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Book/${userId}`,
        values
      ) //update the data by id
      .then((res) => {
        toast.success("Updated Successfully");
        navigate("/");
      })
      .catch((err) => toast.error("Error Occured"));
  };
  useEffect(() => {
    formik.setValues(editData); // for updating the initial values
  }, [editData]);
  const validationSchema = Yup.object().shape({
    author: Yup.string().required("Author Name Required"), //Formik Errors
    title: Yup.string().required("Book Name Required"), //Formik Errors
    isbn: Yup.string().required("ISBN Required"), //Formik Errors
    pubdate: Yup.string().required("Publication Date Required"), //Formik Errors
    authorname: Yup.string().required("Author Name Required"), //Formik Errors
    birth: Yup.string().required("Date of Birth Required"), //Formik Errors
    description: Yup.string().required("Book short Biography Required"), //Formik Errors
  });
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
    validationSchema,
    onSubmit: editForm,
  }); // useformik is used for validation of forms applying the intial value , validationSchema(to display the error message and required characters for that field), OnSubmit
  return (
    <div>
      <h1 className="text-center">Edit Detail Form</h1>
      {loading && <Loading />}
      {!loading && (
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
              value={formik.values.id}
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
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Edit;
