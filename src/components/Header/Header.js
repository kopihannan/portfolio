import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import resume from '../../assets/image/kopi hannan resume.pdf'

const Header = () => {
    return (
        <div>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to="/" className='bg-button'>Home</Link></li>
                            <li><Link className='bg-button'>About</Link></li>
                            <li><Link to="/projects" className='bg-button'>Project</Link></li>
                            <li><Link to="/contact" className='bg-button'>Contact</Link></li>

                        </ul>
                    </div>
                    <Link className="lg:w-16 md:w-16 w-10"><img src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className='bg-button'>Home</Link></li>
                        <li><Link className='bg-button'>About</Link></li>
                        <li><Link to="/projects" className='bg-button'>Project</Link></li>
                        <li><Link to="/contact" className='bg-button'>Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='button' to={resume} target="_blank" download>My Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;