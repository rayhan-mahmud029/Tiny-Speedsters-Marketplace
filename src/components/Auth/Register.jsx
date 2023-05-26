import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { authRegister, setUser, updateUserInfo } = useContext(AuthContext);

    const registerFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { name, password, email, photo };


        // auth registration with emial, password
        authRegister(email, password)
            .then(result => {
                const user = result.user;
                updateUserInfo(name, photo)
                    .then(() => {
                        toast.success('Profile Updated');
                    })
                    .catch(err => {
                        toast.success('Profile Update Error');
                    })
                setUser(user)
                toast.success('Welcome! Registration Successful');
                form.reset()
            })
            .catch(err => {
                toast.error(`Error: ${err.message}`);
            })
    }

    // dynamic title
    useTitle('Tiny Speedsters | Register')

    return (
        <div className='w-[80%] mx-auto custom-bg relative'>
            <div className="absolute -z-10 opacity-30 h-full w-full">
                <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full' />
            </div>
            <div className='bg-[#1414140d] p-8 rounded-md my-6'>
                <h3 className="text-xl md:text-2xl text-center font-semibold">Create your account</h3>
                <p className='text-gray-600 text-center'>Use the below form to create your account</p>

                <form className='my-3 flex-col gap-3 space-y-8' onSubmit={registerFormSubmit}>
                    <div className='my-4'>
                        <label htmlFor="name" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Name</label>
                        <input defaultValue='' type="text" name="name" id="name" placeholder='Enter your name' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="email" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Email</label>
                        <input defaultValue='' type="email" name="email" id="email" placeholder='Enter your email' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="photo" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>PhotoURL</label>
                        <input defaultValue='' type="url" name="photo" id="photo" placeholder='Enter your profile photoURL' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="password" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Password</label>
                        <input defaultValue='' type="password" name="password" id="password" placeholder='Enter password' className='border-0 p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='space-y-2'>
                        <Button gradientDuoTone="pinkToOrange" className='w-full rounded-full' type='submit'>
                            Sign Up
                        </Button>
                        <p className='text-neutral-600'>Already have an account? <Link to='/login' className='text-blue-600'>SignIn</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;