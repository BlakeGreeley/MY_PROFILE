import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Hire, Link } from 'react-router-dom';

const Dashboard = () => {
    // const [allHire, setAllHires] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8000/api/hire')
    //         .then((response) => {
    //             console.log(response.data);
    //             setAllHires(response.data);
    //         })
    //         .catch((err) => {
    //             console.log(err.response);
    //         })
    // }, []);

    return (
        <div className="container">
            {/* top of the page. will be used to display name on the left with a navigation icon on the right that has a 
            drop down function. */}
            <div className="header">
                <h1>Blake Greeley</h1>
                <div className="right-nav">
                    <Link to='/contact' className="btn">Contact Me</Link>
                    <div class="dropdown">
                        <button class="dropbtn">
                            <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z"></path>
                            </svg>
                            <i></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="/Projects">PROJECTS</a>
                            <a href="/Resume">RESUME</a>
                            <a href="/AboutMe">ABOUT ME</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="qoute">
                <p>"To realize one's destiny<br></br>
                is a person's only obligation." <br></br>
                - Paulo CoelHo</p>

            </div>

            <div className="info-box">
                
            </div>

            <div className="end-page">
                <div className="info-card">
                    <div>
                    <h2>Blake Greeley</h2>
                    <h3>1-360-991-7125</h3>
                    <h3>https://www.linkedin.com/in/blake-greeley-58442079/</h3>
                    <h3>https://github.com/BlakeGreeley</h3>
                    </div>

                    <div className="categories">
                        <Link to='/Projects' className="btn-info">PROJECTS</Link>

                        <Link to='/Resume' className="btn-info">RESUME</Link>

                        <Link to='/AboutMe' className="btn-info">ABOUT ME</Link>

                        <Link to='/projects' className="btn-info">CONTACT ME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;