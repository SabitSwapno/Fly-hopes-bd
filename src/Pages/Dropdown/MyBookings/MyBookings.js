import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Table } from 'react-bootstrap';

const MyBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://eerie-shadow-39034.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDeleteUser = id => {
        const url = `https://eerie-shadow-39034.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert("are you sure you want to delete?")
                const remainigItems = bookings.filter(book => book._id !== id)
                setBookings(remainigItems);
            })

    }

    return (
        <>
            <Header></Header>
            <div className="py-5">
                <h2>My Orders</h2>
                {
                    bookings.map(data => <div
                        key={data._id}
                        data={data}
                    >
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Serviceid</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data?.name}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.Serviceid}</td>
                                    <button onClick={() => handleDeleteUser(data?._id)} className="btn btn-danger">Delete</button>
                                </tr>
                            </tbody>
                        </Table>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyBookings;