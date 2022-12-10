import React from 'react';
import kopi from '../../assets/image/kopi.png';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 md:w-1/2 w-full flex lg:justify-end justify-center'>
                        <img src={kopi} className="shadow lg:w-8/12 md:w-8/12 w-full kopi-img" alt='' />
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">MERN STACK DEVELOPER</h1>
                        <p className="py-6">My name is kopi, I'm a professional mern stack developer. As a developer, I will develop a website as you want. I am working with javascript,react, mongoDB,express js, node js, bootstrap,tailwind css, rest API etc..</p>
                        <button className="button">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;