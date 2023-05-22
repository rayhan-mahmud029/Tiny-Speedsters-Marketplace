import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import { Button } from 'flowbite-react';



const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { picture, category, name, description, ratings, price, sellerName, sellerEmail, availableQuantity } = toyData[0];


    return (
        <div className='my-4 lg:my-8 flex flex-col md:flex-row w-[95%] md:w-[85%] mx-auto' >
            <figure className='flex-1 flex justify-center items-center'>
                <div className='h-9/12 w-9/12 rounded-xl overflow-hidden'>
                    <img
                        src={picture}
                        alt=""
                        className='w-full h-full object-cover transform hover:scale-110  transition-transform duration-300'
                    />
                </div>
            </figure>
            <div className="flex-1">
                <p className='my-4'><Link to='/all-toys' className='text-blue-800 underline mr-1'>All Toys</Link> / <span className="ms-1">{category}</span></p>
                <h1 className="text-xl md:text-3xl my-3">
                    {name} - {description}
                </h1>
                <hr />
                <div className="my-3">
                    <div className="flex gap-2 lg:gap-4 items-center py-6">
                        <div>
                            <ReactStarsRating value={ratings} className='flex gap-1' size={30} readonly />
                        </div>
                        <p className="text-xl text-poppins font-medium">{ratings}</p>
                        <div className='h-8 w-0.5 bg-slate-200 rounded-lg'></div>
                        <div>
                            <p className='text-poppins md:text-xl'> <span className="font-semibold">Seller:</span>  {sellerName} </p>
                            <p className='text-poppins text-sm'>{sellerEmail}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex my-4">
                        <div className='flex-1'>
                            <h1 className='text-6xl mt-3'>${price}</h1>
                            <p className='text-poppins'>In Stock: {availableQuantity}</p>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <Button gradientDuoTone="greenToBlue" className='text-poppins font-semibold'>
                                Add To Cart
                            </Button>
                            <Button gradientDuoTone="pinkToOrange" className='text-poppins font-semibold'>
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ToyDetails;