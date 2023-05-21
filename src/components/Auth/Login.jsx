import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { authLogin, setUser, authLoginWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()

    const formSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        // auth login with email, password
        authLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setLoading(false)
                form.reset()
                navigate('/')
            })
            .catch(err => console.error(err.message))
    }

    const handleGoogleLogin = () => {
        authLoginWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user)
                setLoading(false)
                navigate('/')
            })
            .catch(err => console.error(err.message))
    }
    return (
        <div className='w-[80%] mx-auto custom-bg relative'>
            <div className="absolute -z-10 opacity-30 h-full w-full">
                <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full' />
            </div>
            <div className='bg-[#1414140d] p-8 rounded-md my-6'>
                <h3 className="text-xl md:text-2xl text-center font-semibold">Login now</h3>
                <p className='text-gray-600 text-center'>Use the below form to login</p>

                <form className='my-3 flex-col gap-3 space-y-8' onSubmit={formSubmit}>
                    <div className='my-4'>
                        <label htmlFor="email" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Email</label>
                        <input defaultValue='' type="email" name="email" id="email" placeholder='Enter your email' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="password" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Password</label>
                        <input defaultValue='' type="password" name="password" id="password" placeholder='Enter password' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='space-y-2'>
                        <Button gradientDuoTone="pinkToOrange" className='w-full rounded-full' type='submit'>
                            Sign In
                        </Button>
                        <p className='text-neutral-600'>Don't have an account yet? <Link to='/register' className='text-blue-600'>Sign Up</Link> </p>
                    </div>
                </form>
                <div className="divider">OR</div>
                <Button
                    outline={true}
                    gradientDuoTone="pinkToOrange"
                    className='w-full '
                    onClick={handleGoogleLogin}
                >
                    <div className='flex gap-1 items-center justify-center text-md'>
                        <FaGoogle />
                        <p>Sign In With Google</p>
                    </div>
                </Button>

            </div>
        </div>
    );
};

export default Login;