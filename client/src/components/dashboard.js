import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Hire } from 'react-router-dom';

const dashboard = () => {
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
            </div>

            <div className="Pic-qoute">

            </div>

            <div className="info-box">

            </div>
        </div>
    )
}

export default dashboard;