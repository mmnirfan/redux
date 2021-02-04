import React from 'react';

import './Student.css';

const student = (props) => (
    <div className="Student" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Class: {props.classs}</p>
    </div>
);

export default student;