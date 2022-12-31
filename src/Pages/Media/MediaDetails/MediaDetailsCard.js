import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MediaDetailsCard = ({media}) => {
    const {user_name, email, postDateInfo, post_image, details} = media;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-5 mx-auto">
                <figure><img className='h-64' src={post_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{user_name} posted:</h2>
                    <p>{details}</p>
                    <p className='font-bold'>Email: {email}</p>
                    <p className='font-bold'>Time: {postDateInfo.postTime}, {postDateInfo.postDay}</p>
                    <div className='flex justify-around my-3'>
                        <Link  
                        className='btn'>
                            <FaHeart></FaHeart>
                        </Link>
                        <button className="btn">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaDetailsCard;