import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const SignUp = () => {
    useTitle("Sign up")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        console.log(data);
        setError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                

                const poppersUser = {
                    userEmail : user.email,
                    displayName: data.name
                }

                fetch('https://poppers-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(poppersUser)
                })
                
                toast('You have joined us Successfully.')
                navigate(from, {replace: true});

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            }); 
    } 

    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user);
          toast.success('You have successfully created your account.');
        })
      }

    return (
        <div className='h-[800px] flex justify-center items-center my-5'>
            <div className='w-96 p-7 bg-lime-200 rounded-lg'>
            <div className="avatar flex justify-center mb-3">
                    <div className="w-32 rounded-full">
                        <img src="https://i.ibb.co/KwDX2w0/signup.jpg" alt='used sarees'/>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {error && <p className='text-red-600'>{error}</p>}
                </form>
                <p className='mt-3'>Already have an account? <Link className='font-bold text-green-600 hover:btn-link' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;