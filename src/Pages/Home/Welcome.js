import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Welcome = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className='mx-5'>
                {
                    user?.uid ?
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Hello, <span className='text-purple-900 text-3xl'>{user.displayName}.</span> <br/> Welcome to Poppers.</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Are You <span className='text-purple-900 text-3xl'>New </span> to this Website? <br/> Please Sign Up to explore more.<br/> Already have an account? please <Link to='/signup' className='hover:link-hover'>Sign Up</Link>.</p>
                            </div>
                        </>
                }
            </div>
    );
};

export default Welcome;