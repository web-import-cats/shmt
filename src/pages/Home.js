import React, {useState} from 'react';
import Main from "../components/Main";
import About from "../components/About";
import SearchShmot from "../components/SearchShmot";
import Features from "../components/Features";


const Home = () => {
    // try API github //
    const [name, setName] = useState('')

    fetch('https://api.github.com/users/atarannn')
        .then(data => data.json())
        .then(data => setName(data.login))
    // end of try API github //
    return (
        <div>
            <Main/>
            <About/>
            <SearchShmot/>
            <Features/>
<<<<<<< Updated upstream
            <!-- try API github -->
=======
>>>>>>> Stashed changes
            <div className="App">
                <header className="App-header">
                    <p>
                        { name }
                    </p>
                </header>
            </div>
<<<<<<< Updated upstream
            <!-- end of try API github -->
=======
>>>>>>> Stashed changes
        </div>
);
};

export default Home;