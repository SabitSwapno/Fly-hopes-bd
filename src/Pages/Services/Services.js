import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './Service/Service';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://eerie-shadow-39034.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className="pb-3 fw-bolder">These are our <span className="color">Services</span> </h2>
            <div className="row g-3">
                {
                    service.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;