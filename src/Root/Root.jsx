import React from 'react';
import Header from '../sharedComponent/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../sharedComponent/footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#F8FAFC] h-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;