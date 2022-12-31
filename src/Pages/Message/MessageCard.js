import React from 'react';

const MessageCard = ({profile}) => {
    const {profile_image, user_name} = profile;

    return (
        <div className='flex justify-center m-5'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={profile_image} alt=''/>
                </div>
            </div>
            <div className='ml-2 my-auto'>{user_name}</div>
        </div>
    );
};

export default MessageCard;