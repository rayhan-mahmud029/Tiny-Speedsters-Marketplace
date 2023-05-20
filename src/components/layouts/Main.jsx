import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />

            <section className='my-4'>
                <Outlet />
            </section>
        </div>
    );
};

export default Main;