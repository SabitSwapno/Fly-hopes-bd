import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Col, Row } from 'react-bootstrap';
import './AddAService.css'
import axios from 'axios';


const AddAService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://eerie-shadow-39034.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data added successfully');
                    reset();
                }
            })

    }
    return (
        <>
            <Header></Header>
            <div className="my-5 container">
                <Row className="d-flex align-items-center">
                    <Col>
                        <img src="https://i.ibb.co/X3rdDMp/Plan-Your-Journey-with-us-Commerce-Slogan-Mobile-Cover-for-Travel-Agency-Marketing-Promotion-Best-Of.jpg" alt="" className="img-fluid" />
                    </Col>
                    <Col>
                        <h3>Add A Service</h3>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="custom-field-style" {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" required />
                            <br />
                            <textarea className="custom-field-style" {...register("description")} placeholder="Add Description" />
                            <br />
                            <input className="custom-field-style" type="number" {...register("key", { min: 7, max: 99 })} placeholder="Give a key don't repeat the same" />
                            <br />
                            <input className="custom-field-style" {...register("img")} placeholder="Image url" />
                            <br />
                            <input className="custom-btn" type="submit" />
                        </form>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddAService;