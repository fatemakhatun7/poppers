import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Error = () => {
    useTitle("Error")
    return (
        <div className='text-center text-2xl font-bold mt-10'>
            <div className='rounded-lg w-48 mx-auto mb-5'>
                <img src="https://i.ibb.co/1KJp8y3/error.jpg" alt="" />
            </div>
            <h1>Error <span class="text-error">404</span></h1>
            <h4>Sorry, You have entered wrong route. </h4>
            <Link to='/'>Back to 
            <span className='link link-hover text-green-500'> Home</span>
            </Link>
        </div>
    );
};

export default Error;