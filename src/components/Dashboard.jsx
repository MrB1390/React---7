import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./dash.css";
const Dashboard = ({setUserId}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [deleteId, setDeleteId] = useState([]);
    const handleDelete = async (id) => {
      await axios
        .delete(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Book/${id}`)
        .then((res) => {
          toast.success("Deleted Successfully");
          setDeleteId(res.data);
        })
        .catch((err) => {
          toast.error("Error Occured", err);
        });
    };
    const handleEdit = (id) => {
      setUserId(id);
      console.log(id);
      navigate("/edit");
    };
    useEffect(() => {
      fetchData();
    }, [deleteId]);
    const fetchData = async () => {
      await axios
        .get("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Book")
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-center">
          <a class="navbar-brand text-primary" href="#">
            Library Management
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <h1 className="text-center">Book Details</h1>
      <div class="table-responsive">
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Author</th>
                <th scope="col">Title</th>
                <th scope="col">ISBN</th>
                <th scope="col">Publication Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>
                      <p class="fw-normal mb-1">{item.author}</p>
                      </td>
                      <td>
                        <p class="fw-normal mb-1">{item.title}</p>
                      </td>
                      <td>
                      <p class="fw-normal mb-1">{item.isbn}</p>
                      </td>
                      <td>
                      <p class="fw-normal mb-1">{item.pubdate}</p>
                      </td>
                      <td>
                        <div className="d-flex me-3">
                          <button
                            type="button"
                            class="btn btn-primary rounded-4 btn-sm"
                            onClick={() => {
                              handleEdit(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger rounded-4 btn-sm mx-2"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <h1 className="text-center">Author Details</h1>
      <div class="table-responsive">
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Author Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>
                      <p class="fw-normal mb-1">{item.authorname}</p>
                      </td>
                      <td>
                        <p class="fw-normal mb-1">{item.birth}</p>
                      </td>
                      <td>
                      <p class="fw-normal mb-1">{item.description}</p>
                      </td>
                      <td>
                        <div className="d-flex me-3">
                          <button
                            type="button"
                            class="btn btn-primary rounded-4 btn-sm"
                            onClick={() => {
                              handleEdit(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger rounded-4 btn-sm mx-2"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div> 
    </div>
  );
};

export default Dashboard;
