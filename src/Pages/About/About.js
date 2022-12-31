import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const About = () => {
    const {user} = useContext(AuthContext);
    useTitle("About");

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Hello, {user.displayName}!</h2>
                    <p className='font-semibold'>Your email: {user.email}</p>
                    <p className='font-semibold'>You can edit your profile here.</p>
                    <div className="card-actions justify-end">
                    <Link to='/profile' className="btn btn-primary normal-case">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;