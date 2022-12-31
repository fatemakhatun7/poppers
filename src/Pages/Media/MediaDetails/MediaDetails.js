import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MediaDetailsCard from './MediaDetailsCard';

const MediaDetails = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios
        .get("https://poppers-server.vercel.app/media")
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
    }, []);

    return (
        <div>
            <div className='my-10'>
                {
                    data.map(media=><MediaDetailsCard 
                        key={media._id} 
                        media={media}
                    ></MediaDetailsCard>)
                }
            </div>
        </div>
    );
};

export default MediaDetails;