import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const {serviceID} = useParams();
    const [service] = useServiceDetail(serviceID);
    const [user] = useAuthState(auth);
    if(user){
        console.log(user);
    }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service:service.name,
            serviceID:serviceID,
            address:event.target.address.value,
            phone:event.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(response=>{
            const {data} = response;
            if(data.insertedID){
                toast('Your order is booked !');
                event.target.reset();
            }
        })
    }
        
    return (
        <div className='w-50 mx-auto'>
            <h2>Plz checkout for order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='name' readOnly disabled /> <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id=""placeholder='email' readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='service' readOnly /> 
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' autoComplete='off' /> 
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;