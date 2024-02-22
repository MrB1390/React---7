import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div >
             <div class="container">
    <div
        class="offcanvas dash offcanvas-start show"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
    >
        <div class="offcanvas-header justify-content-center border-bottom">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                Admin Dashboard
            </h5>
        </div>
        <div class="offcanvas-body text-center">
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action lid">
                   <Link to='/add' style={{textDecoration: "none",color: "inherit"}}>Add User</Link> 
                </li>
                <li class="list-group-item list-group-item-action lid"> <Link to='/edit' style={{textDecoration: "none",color: "inherit"}}>Edit User</Link> </li>
                <li class="list-group-item list-group-item-action lid"><Link to='/' style={{textDecoration: "none",color: "inherit"}}>Home</Link></li>
                <li class="list-group-item list-group-item-action lid">Settings</li>
                <li class="list-group-item list-group-item-action lid">About Us</li>
            </ul>
        </div>
    </div>
</div>
        </div>
    );
};

export default Sidebar;