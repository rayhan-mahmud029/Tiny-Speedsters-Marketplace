import { Button } from 'flowbite-react';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <img src="https://i.ibb.co/nDq1fW6/5203299.jpg" alt="Error" className='w-1/3  hover:scale-110 transition ' />
            <div className='my-8 w-1/4'>
                <Link to='/'>
                    <Button
                        color="warning"
                        pill={true}
                        className='w-full'
                    >
                        <div className='flex gap-2 items-center'>
                            <FaArrowLeft />
                            <p>Back To Home</p>
                        </div>

                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;