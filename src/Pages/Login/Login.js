import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import login from '../../assets/Lottie/logo.json'

const Login = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="hero min-h-screen w-full bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <div className='h-full w-full'>
                                    <Lottie animationData={login} loop={true} />
                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form  className="card-body pb-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        

                                    </div>
                                    <div className="text-red-500 py-1">
                                        {/* {error} */}
                                    </div>
                                    <label className="label">
                                        <h1>Need Account? <span className='text-violet-500 font-semibold'> <Link to='/register'>Click to Register</Link> </span></h1>
                                    </label>
                                    <div className="form-control ">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <div className="divider mx-6 mt-0">OR</div>
                                {/* <OtherAccount></OtherAccount> */}

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

export default Login;