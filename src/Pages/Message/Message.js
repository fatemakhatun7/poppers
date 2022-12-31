import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MessageCard from './MessageCard';

const Message = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios
        .get("http://localhost:5000/profile")
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
    }, []);

    return (
        <div>
            <div className='my-10'>
                <p className='text-center text-3xl font-semibold my-5'>Chat Box</p>
            </div>
            <div className='my-10'>
                {
                    data.map(profile=><MessageCard 
                        key={profile._id} 
                        profile={profile}
                    ></MessageCard>)
                }
            </div>
        </div>
    );
};

export default Message;