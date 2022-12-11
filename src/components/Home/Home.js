import React from 'react';
import Contact from '../Contact/Contact';
import Banner from '../Header/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;