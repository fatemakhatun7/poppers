import React from 'react';
import { Link } from 'react-router-dom';

const PostForm = () => {

    return (
        <div className='mx-5 mb-10'>
            <div className="flex my-4">
                <div className="avatar">
                    <div className="w-10 sm:w-16 rounded-full mr-1">
                        <img src="https://i.ibb.co/cLybsZG/poppers.jpg" alt=''/>
                    </div>
                </div>
                <div className='my-auto'>
                <p className='font-bold text-2xl'>Share your feelings.</p>
                </div>
            </div> 
            <div className='ml-20'>
                <Link to='/addPost' className="btn normal-case">What's on your mind?</Link>
            </div>
        </div>
    );
};

export default PostForm;