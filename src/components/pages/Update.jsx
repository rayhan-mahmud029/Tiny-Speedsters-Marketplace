import React from 'react';

const UpdateToy = () => {
    const data = useLoaderData();
    const toy = data[0];
    const navigate = useNavigate()



    const formSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const toyUpdate = { price, quantity, description }
        console.log(toyUpdate);

        fetch(`http://localhost:5000/toy/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Data updated.')
                    form.reset();
                    navigate('/my-toys')
                }
            })
            .catch(err => console.error(err.message))

    }

    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto'>
            <div className="absolute -z-10 opacity-30 h-full w-full">
                <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full' />
            </div>
            <div className='bg-[#1414140d] p-8 lg:p-12 rounded-md my-6 relative'>
                <img src="" alt="" />
                <h3 className="text-2xl md:text-5xl text-center font-semibold">Update your toy</h3>
                <p className='text-gray-600 text-center'>Make your toy available for purchase</p>

                <form className='my-3 flex-col gap-3' onSubmit={formSubmit}>
                    <div className="flex gap-3 w-full">
                        <div className='my-4 flex-1'>
                            <label htmlFor="price" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Price</label>
                            <input defaultValue={toy.price} type="text" name="price" id="price" placeholder='Enter expected price' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                        </div>

                        <div className='my-4 flex-1'>
                            <label htmlFor="quantity" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>In Stock</label>
                            <input defaultValue={toy.availableQuantity} type="number" name="quantity" id="quantity" placeholder='Enter available quantity' className='border-none p-3 bg-white text-poppins font-medium rounded-sm w-full' />
                        </div>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="quantity" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Description</label>
                        <textarea defaultValue={toy.description} name='description' className='w-full h-32 border-none text-poppins' placeholder='Elaborate your product'></textarea>
                    </div>


                    <button className='btn p-3 w-full  font-medium text-white mt-6 text-poppins rounded-none bg-[#929292] border-none'>Update Your Toy</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;