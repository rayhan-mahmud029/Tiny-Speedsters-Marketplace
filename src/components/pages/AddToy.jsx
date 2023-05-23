import { Option, Select } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const [category, setCategory] = useState('');

    const formSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const toyName = form.toyName.value;
        const picture = form.picture.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const toy = { sellerName, sellerEmail, toyName, picture, ratings, price, quantity, description, category }
        console.log(toy);

        fetch('http://localhost:5000/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    alert('Toy has been added')
                }
            })
            .catch(err => console.error(err.message))

    }
    const handleOptionChange = e => {
        setCategory(e);
    }

      // dynamic title
      useTitle('Tiny Speedsters | Add Toy')
    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto'>
            <div className="absolute -z-10 opacity-30 h-full w-full">
                <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full' />
            </div>
            <div className='bg-[#1414140d] p-8 lg:p-12 rounded-md my-6 relative'>
                <img src="" alt="" />
                <h3 className="text-2xl md:text-5xl text-center font-semibold">Feature your toy</h3>
                <p className='text-gray-600 text-center'>Make your toy available for purchase</p>

                <form className='my-3 flex-col gap-3' onSubmit={formSubmit}>
                    <div className='my-4'>
                        <label htmlFor="sellerName" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Seller Name</label>
                        <input defaultValue='' type="text" name="sellerName" id="sellerName" placeholder='Enter your name' className='border-none p-3 text-poppins font-medium bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="email" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Your Email</label>
                        <input defaultValue='' type="email" name="email" id="email" placeholder='Enter your email' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                    </div>


                    <div className='my-4'>
                        <label htmlFor="toyName" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Toy Name</label>
                        <input defaultValue='' type="text" name="toyName" id="toyName" placeholder="Enter your toy's name" className='border-none p-3 text-poppins font-medium bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="picture" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Toy Picture</label>
                        <input defaultValue='' type="url" name="picture" id="picture" placeholder="Photo URL" className='border-none p-3 text-poppins font-medium bg-white rounded-sm w-full' />
                    </div>

                    <div className="flex gap-3 w-full">

                        <div className='my-4 flex-1'>
                            <label htmlFor="category" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Category</label>
                            <Select
                                size="lg"
                                label="Select Version"
                                onChange={handleOptionChange}
                                value={category}
                            >
                                <Option value='Sports Car'>Sports Car</Option>
                                <Option value='Truck'>Truck</Option>
                                <Option value='Police Car'>Police Car</Option>
                            </Select>
                        </div>

                        <div className='my-4 flex-1'>
                            <label htmlFor="ratings" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Ratings</label>
                            <input defaultValue='' type="text" name="ratings" id="ratings" placeholder='Enter ratings' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                        </div>
                    </div>

                    <div className="flex gap-3 w-full">
                        <div className='my-4 flex-1'>
                            <label htmlFor="price" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Price</label>
                            <input defaultValue='' type="text" name="price" id="price" placeholder='Enter expected price' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                        </div>

                        <div className='my-4 flex-1'>
                            <label htmlFor="quantity" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>In Stock</label>
                            <input defaultValue='' type="number" name="quantity" id="quantity" placeholder='Enter available quantity' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                        </div>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="quantity" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Description</label>
                        <textarea name='description' className='w-full h-32 border-none text-poppins' placeholder='Elaborate your product'></textarea>
                    </div>


                    <button className='btn p-3 w-full  font-medium text-white mt-6 text-poppins rounded-none bg-[#929292] border-none'>Add Your Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;