import React from 'react';
import Main from "../components/Main";
import About from "../components/About";
import SearchShmot from "../components/SearchShmot";
import Features from "../components/Features";

const Home = () => {
    return (
        <div>
            <Main/>
            <About/>
            <SearchShmot/>
            <Features/>
        </div>
);
};

export default Home;