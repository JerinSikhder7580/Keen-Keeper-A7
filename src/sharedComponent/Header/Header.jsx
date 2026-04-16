import React from 'react';
import navImg from "./../../assets/logo.png"
import { NavLink } from 'react-router';
import { ChartSpline, Clock, House } from 'lucide-react';
import "./Header.css"

const Header = () => {

    return (
        <div>
            <div className='flex justify-between p-7 border-b border-b-gray-300'>
                <img src={navImg} alt="" />
                <ul className='flex gap-4 justify-between'>
                    <li ><NavLink to={'/'} className="flex gap-1 btn"><House /> Home</NavLink></li>
                    <li><NavLink to={"timeline"} className="flex gap-1 btn"><Clock /> TimeLine</NavLink></li>
                    <li><NavLink to={"status"} className='flex gap-1 btn'><ChartSpline /> Status</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Header;