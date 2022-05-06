import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceID} = useParams()
    const [service] = useServiceDetail(serviceID)
    return (
        <div className='container text-center'>
            <h2>Service Detail: {service.name}</h2>
            <Link to={`/checkout/${serviceID}`}>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;