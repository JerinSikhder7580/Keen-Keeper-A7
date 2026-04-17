import React from 'react';
import footerImg from "./../../assets/logo-xl.png"
import fbImg from "./../../assets/facebook.png"
import IgImg from "./../../assets/instagram.png"
import XImg from "../../assets/twitter.png"
const Footer = () => {
    return (
        <div>
            <div className='bg-[#244d3f] py-48  '>
                <section>
                    <div className='text-center space-y-6' >
                        <div >
                            <img className='mx-auto text-center' src={footerImg} alt="" />
                        </div>
                        <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                        <p className='text-xl font-semibold text-white'>Social Links</p>
                        <div className='flex justify-center gap-4'>
                            <img src={fbImg} alt="" />
                            <img src={IgImg} alt="" />
                            <img src={XImg} alt="" />
                        </div>

                        <div className='text-gray-500'>
                            <hr />
                        </div>

                        <div className='sm:flex justify-between text-gray-400'>
                            <p>© 2026 KeenKeeper. All rights reserved.</p>
                            <ul className='sm:flex gap-3'>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Footer;