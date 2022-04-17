import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams()
    return (
        <div className='container text-center'>
            <h2>Service Detail: {serviceID}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;