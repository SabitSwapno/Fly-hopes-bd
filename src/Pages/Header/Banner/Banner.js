import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="relative-positions">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/qCnwWSq/2959-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Lets make your best trip ever.</h2>
                        <p>Choose our services and get the as you wanted.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/r5fqvCQ/man-standing-cliff-with-fog-overlay-texture-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Travel is the only thing you buy that makes you richer</h2>
                        <p>Yes that's why our first priority is to make you more richer with the best services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/023BmQZ/top-view-tourist-items-bag-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Life is a journey, not a destination</h2>
                        <p>It's kinda true but you have choose the destination where you want to go cause we will make that happen.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;