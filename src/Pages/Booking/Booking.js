import React, { useEffect, useState } from 'react';
import './Booking.css'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Booking = () => {
    const { serviceKey } = useParams()
    const [data, setData] = useState()
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://eerie-shadow-39034.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Successfully booked");
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://eerie-shadow-39034.herokuapp.com/services/${serviceKey}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="container my-3">
                <h2>Details of booking <span className="color">{data?.name}</span> </h2>
                <Row className="my-3 d-flex align-items-center">
                    <Col>
                        <div className="card-group">
                            <div className="card">
                                <img src={data?.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data?.name}</h5>
                                    <p className="card-text">{data?.description}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3>Fill up to book {data?.name}</h3>
                        <div className="mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="custom-field-style" {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />
                                <br />
                                <input className="custom-field-style" {...register("email")} defaultValue={user?.email} />
                                <br />
                                <input className="custom-field-style" {...register("address")} placeholder="Your Address" required />
                                <br />
                                <input className="custom-field-style" {...register("city")} placeholder="City" required />
                                <br />
                                <input className="custom-field-style" {...register("Serviceid")} placeholder="Copy the sevice Id and paste here!" required />
                                <h6>Service id : {data?._id}</h6>
                                <br />
                                <input className="custom-btn" type="submit" />
                            </form>
                            <br />
                            <Link to="/home">
                                <button className="cus-info-btn">Go back</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Booking;