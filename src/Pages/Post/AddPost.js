import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddPost = () => {
    useTitle('add post')
    const {user} = useContext(AuthContext);
    const [addPost, setAddPost] = useState({});

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: media = [], isLoading } = useQuery({
        queryKey: ['media'],
        queryFn: async () => {
            const res = await fetch('');
            const data = await res.json();
            return data    
        }
    });

    const postTime = new Date().toLocaleTimeString()
    const postDay = new Date().toDateString()
    const date = new Date()
    const postDateInfo ={
        postTime,
        postDay,
        date
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(addProduct);

        const image = addPost.product_image[0];
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
            const postInfo = {
                user_name: addPost.user_name,
                email: addPost.email,
                post_image: imgData.data.url,
                details: addPost.details,
                postDateInfo: postDateInfo
            }
            
            fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Successfully added your product.');
                e.target.reset();
                navigate('/media')
            }
        })

        }) 
    }

    return (
        <div>
            <div className='bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <p className='text-center text-2xl font-semibold my-5'>Add a Post</p>
            </div>
            <div className='hero my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <Form onSubmit={handleSubmit} className='card-body'>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" name="user_name" onBlur={(e)=>setAddPost({...addPost,user_name : e.target.value})} value={user.displayName} placeholder="Your name" className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" onBlur={(e)=>setAddPost({...addPost,email : e.target.value})} placeholder="Your email" value={user.email} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="file" name="product_image" onBlur={(e)=>setAddPost({...addPost,product_image : e.target.files})} placeholder="product image"  className="input input-bordered input-info max-w-xs mb-2" required/>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">
                                Description
                            </span>
                        </label>
                        <input type="text" name="details" onBlur={(e)=>setAddPost({...addPost,details : e.target.value})} placeholder="details" className="input input-bordered input-info max-w-xs mb-2" required/>
                    </div>
                <div className='form-control'>
                    <Link className="btn btn-active btn-secondary">
                        Submit
                    </Link>
                </div>
                </Form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AddPost;