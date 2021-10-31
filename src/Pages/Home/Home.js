import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <div id="home">
                <Header></Header>
            </div>
            <div className="py-2">
                <h2>Check The full website and Explore more</h2>
            </div>
            <div className="container" id="service">
                <Services></Services>
            </div>
            {/* Why choose us section */}
            <div className="background-pic py-4">
                <h2>Why Choose us..</h2>
                <h6>If you are looking for a reliable tour operator in Bangladesh, “Fly Hope Bangladesh” is the right choice for you. Here are seven reasons why:</h6>
                <ol>
                    <li><span className="fw-bolder">Experience and Trustworthiness.</span>
                        <p>Our company has been providing tour services since August 20, 2013 and we have gained a reputation of an expert in the Bangladeshi incoming tourism market. More than 9 000 of tourist from all over the world have already visited our country with us and highly appreciated the level of service.</p>
                    </li>
                    <li><span className="fw-bolder">Friendly and Qualified Stuff.</span>
                        <p>All the members of our team are passionate about their work and always ready to help. We all enjoy travelling and believe that Bangladesh is a great travel destination for you to explore. Just get in touch with us and we will assist you with planning a trip to bangladesh.</p>
                    </li>
                    <li><span className="fw-bolder">Best Price, no Hidden Fees.</span>
                        <p>We are glad to offer our clients the best rates on our tours, transfers and other services. Due to direct contracts with all our suppliers, our prices are always relevant and affordable.</p>
                    </li>
                    <li><span className="fw-bolder">Openness and Availability.</span>
                        <p>Wherever you need us, we are always there for you. You can easily contact us on e-mail or by phone, subscribe to our newsletter or follow us on Facebook and other social media platforms. We are happy to have you as a part of our community.</p>
                    </li>
                </ol>
            </div>
            {/* Faq section starts here */}
            <div className="container">
                <div>
                    <div className="pt-4">
                        <h2>Frequently Asked <span className="color">Questions</span></h2>
                    </div>
                    <div className="py-4">
                        <Row>
                            <Col>
                                <img src="https://i.ibb.co/ykKQQz3/5098466.jpg" alt="" className="img-fluid" />
                            </Col>
                            <Col>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="borders">How can we believe this website?</Accordion.Header>
                                        <Accordion.Body className="borders">
                                            We applied for CTA designation with at least 12 months of experience in the retail travel industry. Whereas, we became eligible to apply for a CTC designation after getting 5 years of experience in this industry to prove that the applicants have requisite skills to be effective managers.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="borders">What are the advantages of booking with a travel agent?</Accordion.Header>
                                        <Accordion.Body className="borders">
                                            <ul>
                                                <li>You're protected!.</li>
                                                <li>You can pay in instalments.</li>
                                                <li>They do all the work so you save on time and money!</li>
                                                <li>You get expert advice.</li>
                                                <li>Changes and cancellations.</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="borders">Can a travel agency improve my experience?</Accordion.Header>
                                        <Accordion.Body className="borders">
                                            Improving communication skills, especially writing skills can improve the quality of the experience an agent can deliver to a client. Replying promptly to both first-time inquiries as well as current clients' messages also builds the client's confidence that their needs will be handled adequately.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* FAQ section ends here */}
            <Footer></Footer>
        </>
    );
};

export default Home;