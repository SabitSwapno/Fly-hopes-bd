import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, description, img } = props.service;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="card-group">
                <div className="card bg-card-custom">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/booking/${_id}`}>
                            <button className="custom-btn">Book for {name}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;