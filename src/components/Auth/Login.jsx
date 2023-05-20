import React from 'react';

const Login = () => {
    const formSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const chocolate = { name, country, selectedOption }

        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Item added successfully!',
                        icon: 'success',
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className='w-[80%] mx-auto custom-bg relative'>
            <div className="absolute -z-10 opacity-30 h-full w-full">
                <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full'/>
            </div>
            <div className='bg-[#1414140d] p-8 rounded-md my-6'>
                <h3 className="text-xl md:text-2xl text-center font-semibold">Login now</h3>
                <p className='text-gray-600 text-center'>Use the below form to login</p>

                <form className='my-3 flex-col gap-3' onSubmit={formSubmit}>
                    <div className='my-4'>
                        <label htmlFor="name" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Name</label>
                        <input defaultValue='' type="text" name="name" id="name" placeholder='Enter your name' className='p-3 bg-white rounded-sm w-full' />
                    </div>

                    <div className='my-4'>
                        <label htmlFor="country" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Password</label>
                        <input defaultValue='' type="text" name="country" id="country" placeholder='Enter password' className='p-3 bg-white rounded-sm w-full' />
                    </div>

             
                    <button className='btn p-3 w-full rounded-md font-medium text-white mt-6'>Add Chocolate</button>
                </form>
            </div>
        </div>
    );
};

export default Login;