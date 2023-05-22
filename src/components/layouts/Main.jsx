import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import FooterNav from '../shared/FooterNav';

const Main = () => {
    return (
        <div>
            <Navbar />

            <section className='my-4'>
                <Outlet />
            </section>
            <FooterNav/>
        </div>
    );
};

export default Main;