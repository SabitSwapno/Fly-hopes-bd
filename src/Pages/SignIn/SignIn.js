import React from 'react';
import './SignIn.css'
import { Col, Row, } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    const { signInUsingGoogle, } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl)
            })
    }

    return (
        <>
            <Header></Header>
            <div>
                <Row className="d-flex align-items-center">
                    <Col>
                        <img className="img-fluid" src="https://i.ibb.co/TTQSJhx/5098293.jpg" alt="" />
                    </Col>
                    <Col className="signText">
                        <h1>Flying Hope BD</h1>
                        <br />
                        <h4>Sign in and get more details</h4>
                        <br />
                        <button onClick={handleGoogleSignIn} className="custom-btn"><i class="fab fa-google"></i>  Google Sign In </button>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignIn;