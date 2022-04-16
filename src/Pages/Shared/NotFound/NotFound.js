import React from 'react';
import sleeping from '../../../images/sleeping.png';

const NotFound = () => {
    return (
        <div className='text-danger text-center'>
            <h2>Page Not Found - 404</h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;