import React,{useState} from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Add from './components/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';

const App = () => {
  const[userId,setUserId] = useState(0);
  return (
    <div>
     <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                    <Sidebar />
                    <ToastContainer />
                    </div>
                    <div className="col-lg-9">
                        <Routes>
                          <Route path='/' element={ <Dashboard  setUserId={setUserId}/>} />
                          <Route path='/add' element={ <Add />} />
                          <Route path='/edit' element={ <Edit userId={userId} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
        </div>
  );
};

export default App;