import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const dashboard = () => {
    const [allHires, setAllHires] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/hire')
            .then((response) => {
                console.log(response.data);
                setAllHires(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);
}