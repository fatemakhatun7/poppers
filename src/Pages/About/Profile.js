import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Profile = () => {
    useTitle("Edit Profile")
    const {user} = useContext(AuthContext);
    const [editProfile, setEditProfile] = useState({});

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(addProduct);

        const image = editProfile.profile_image[0];
        // console.log(image)
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            // console.log(imgData.data.url)
            const profileInfo = {
                user_name: editProfile.user_name, 
                email: editProfile.email,
                profile_image: imgData.data.url,
                school: editProfile.school,
                address: editProfile.address
            }
            
            fetch('https://poppers-server.vercel.app/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Successfully saved your profile.');
                navigate('/about')
            }
        })

        }) 
    }

    return (
        <div>
            <div className='my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <p className='text-center text-2xl font-semibold my-5'>Your profile</p>
            </div>
            <div className='hero my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit} className='card-body'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="user_name" onBlur={(e)=>setEditProfile({...editProfile,user_name : e.target.value})} placeholder="Your name" value={user.displayName} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" onBlur={(e)=>setEditProfile({...editProfile,email : e.target.value})} placeholder="Your email" value={user.email} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Profile image</span>
                            </label>
                            <input type="file" name="profile_image" onBlur={(e)=>setEditProfile({...editProfile,profile_image : e.target.files})} placeholder="profile image"  className="input input-bordered input-info max-w-xs mb-2"/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    School/College/University
                                </span>
                            </label>
                            <input type="text" name="school" onBlur={(e)=>setEditProfile({...editProfile,school : e.target.value})} placeholder="School/College/University" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Address
                                </span>
                            </label>
                            <input type="text" name="address" onBlur={(e)=>setEditProfile({...editProfile,address : e.target.value})} placeholder="Address" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                    <div className='form-control'>
                        <button className="btn btn-active btn-secondary normal-case">
                            Save
                        </button>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;