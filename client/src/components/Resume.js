import { useEffect, useState } from "react";
import axios from 'axios';
import '../Resume.css';
import { Hire, Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className="container">
            <div className="top">
                <Link to="/">
                    <h5>HOME</h5>
                </Link>

                <Link to='/'>
                    <svg width="46" height="46" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.19V2.25h-3.75v2.74L12 1.5 0 12.75h3v9.75h6.75V15h4.5v7.5H21v-9.75h3l-4.5-4.56Z"></path>
                    </svg>
                </Link>
            </div>

            <h4>Blake Greeley</h4> <br></br>
            <p4>
                360-991-7125 | blakegreeley@yahoo.com | LinkedIn | Github <br></br>
            </p4>
            <h5>TECHNICAL SKILLS </h5>
            <p4>
                Languages: Python, Java, JavaScript(ES6, Node.js), TypeScript, HTML5, CSS, SQL <br></br>
                Frameworks/Libraries: Flask, Jinja2, Spring Boot, jQuery, React, Express, React Native, Bootstrap, Material-UI, OOP, MVC <br></br>
                Databases: MySQL, MongoDB, Mongoose, Amazon DynamoDB <br></br>
                Tools: AJAX, Spring Tool Suite, REST API, GraphQL, AWS Amplify, JSON, PostMan, Socket.io, AWS(EC2), MySQL Workbench, Git, Github, Lucid, Microsoft suites, OPUS, and Salesforce.  <br></br>
            </p4>
            <h5>
                TECHNICAL PROJECTS
            </h5>
            <h5>Love It Link it:</h5>
            <p4>

                Online link advertisement site. Using using MongoDB, Express.js, React.js, Node.js <br></br>
                Developed back-end with Express and MongoDB for their flexible structure and data building. <br></br>
                Implemented a user login/registration using front-end validation, Cookies, and JSON web Token. <br></br>
                Built front-end design with CSS, HTML, and bootstrap to have a cohesive user friendly application.
            </p4>

            <h5>Geocaching Website:</h5>
            <p4>
                Social platform application. Using JAVA and SpringBoot Suite <br></br>
                Created and linked one-to-many, and many-to-many models using MySQL enabling individual users to create their geocaching locations and to interact with other people’s posts. <br></br>
                Encrypted the user password through the use of Bcrypt and hashing for user security. <br></br>
                Implemented HTML5 and CSS for engaging UI components and organized page layouts.

            </p4>

            <h5>Book Logger:</h5>
            <p4>
                Book and author tracking log. Using Python and Flask <br></br>
                Utilized jQuery to streamline logic and behavior, and AJAX for a responsive UX. <br></br>
                Designed the wireframe and workflow using Lucid for collaborative output with agile workflow. <br></br>
                Employed Flask framework for fast implementation of additional features via Jinja2 template. <br></br>
                Back-end validations to verify inputs using create, read, update, delete and  error responses.
            </p4>

            <h5>EXPERIENCE</h5>
            <h5>AT&T – Retail Sales Consultant </h5>
            <p4>
                Performed responsibilities of Manager on Duty. <br></br>
                Diagnosed customer issues and determined the best solution for 20+ customers a day. <br></br>
                Orchestrated sales above 160% market goal year over year, utilizing OPUS and salesforce in billing and in person. <br></br>
                Accomplished Director's Cut top sales representative winner 5 quarters in total, 3 times consecutively. <br></br>
            </p4>

            <h5>Lyft – Driver/Operator </h5>
            <p4>Managed scheduling, bookkeeping, operations, and daily customer satisfaction. <br></br>
                Supervised 5,000+ transactions within 2 years with a perfect 5.0 satisfaction score by customers.
            </p4>

            <h5>
                Fired Up Graphics  – Sales/Floor Manager
            </h5>
            <p4>
                Managed custom clothing printing, supply chain, and sales. <br></br>
                Invented training programs to keep staff highly educated on industry standards. <br></br>
                Developed and grew a team of highly motivated workers with individualized strategies.
            </p4>

            <h5>EDUCATION</h5>
            <h5>Coding Dojo – Certification in Full Stack Software Engineering 	</h5>
            <p4>Certified in Web Fundamentals, Algorithms,  Python, Java, and JavaScript (MERN).</p4>
            <h5>Washington State University – Bachelor of Computer Science 	</h5>
            <p4>Junior Status with a 4.0 GPA. <br></br>
                Inducted to The National Society of Leadership and Success - nominated by professors at WSU.
            </p4>
            <h5>Clark college - Associates degree (AA DTA)</h5>
        </div>
    )
}

export default Resume;