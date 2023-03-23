import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react'
import register from '../../assets/Lottie/register.json'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>

                <div>
                    <div className="hero min-h-screen bg-base-200">

                        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold pb-4">Register now!</h1>
                                <div>
                                    <div className='h-full w-full'>
                                        <Lottie animationData={register} loop={true} />
                                    </div>

                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form 
                                 className="card-body pb-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                        <label className="label">
                                            <h1>Have An Account ? <span className='text-violet-500 font-semibold'> <Link to='/login'>Click to Login</Link> </span> </h1>
                                        </label>
                                    </div>
                                    <div className="text-red-500 my-1">
                                        {/* {error} */}
                                    </div>
                                    <div className="form-control mb-0">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </form>

                                <div className="divider mx-6 mt-0">OR</div>

                                <button
                                    
                                    className="btn w-[80%] mx-auto mb-10"><FaGoogle className='mr-2 text-2xl' >
                                    </FaGoogle>Google Signin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;