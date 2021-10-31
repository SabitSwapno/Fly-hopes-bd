import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Row className="d-flex align-items-center pt-5 pb-2">
                <Col>
                    <h4>WORKING HOURS</h4>
                    <ul>
                        <li>Saturday 10:00-16:00</li>
                        <li>Sunday 10:00-16:00</li>
                        <li>Monday 10:00-16:00</li>
                        <li>Tuesday 14:00-20:00</li>
                        <li>Wednesday 14:00-20:00</li>
                        <li>Thursday 14:00-20:00</li>
                        <li>Friday -OFF-</li>
                    </ul>
                    <button className="btn btn-outline-light"> +(714) 556-3171</button>
                </Col>
                <Col>
                    <h4>SPECIAL SERVICES</h4>
                    <p>Create a strong and lasting first impression on your potential clients.</p>
                    <button className="btn btn-outline-light">Make an Appointment</button>
                </Col>
                <Col>
                    <h4>VISIT OUR OFFICE</h4>
                    <p>17361 Khocukhet Street Fountain, CA 92708, Phone: (714) 556-3171 Fax: (714) 907657</p>
                    <button className="btn btn-outline-light">Get Directions</button>
                </Col>
            </Row>
            <br />
            <p>Copyright © 2021 Fly Hope Bangladesh, All Rights Reserved</p>
        </div>
    );
};

export default Footer;