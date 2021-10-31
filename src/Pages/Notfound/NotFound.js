import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src="https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg" alt="" />
            <Link className="custom-btn" to="/home">Back to Home</Link>
        </div>
    );
};

export default NotFound;