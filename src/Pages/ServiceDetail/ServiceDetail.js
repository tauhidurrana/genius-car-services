import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams()
    const [service, setService] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceID}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='container text-center'>
            <h2>Service Detail: {service.name}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;