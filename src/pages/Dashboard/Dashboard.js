import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../additional/CustomLink';

const Dashboard = () => {
    return (
        <div>
            <label for="my-drawer" class=" drawer-button">
                <FontAwesomeIcon
                    className='btn bg-white border-none rounded hover:bg-white hover:text-secondary hover:border-rounded-0 text-primary' icon={faBars}>
                </FontAwesomeIcon>
            </label>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <h1>Dashboard</h1>
                    <Outlet></Outlet>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard'>My Orders</Link></li>
                    <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/addreviews'>Add A Review</Link></li>
                    <li><Link className='focus:text-white focus:bg-secondary' to='/dashboard/myprofile'>My Profile</Link></li>
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;