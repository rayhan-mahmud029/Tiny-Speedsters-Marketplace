import React from 'react';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto'>
            {/* top banner */}
            <div className="flex my-5 py-5 border-b">
                <div className="flex-1 space-y-3 lg:space-y-5 self-center">
                    <div className='py-2 px-4 lg:px-8  bg-[#929292] w-3/4 lg:w-1/3 flex justify-center  text-sm lg:text-lg text-white'>
                        New Arrival
                    </div>

                    <h1 className='text-lg  lg:text-5xl '> <span className='text-xl lg:text-7xl animate-text bg-gradient-to-r from-[#75A4DA] via-[#c3baba] to-orange-500 bg-clip-text font-black text-transparent'>Vroom into Playtime </span> <br /> with a <span className='text-[#75A4DA] text-short-stack'>Car Toy Box!</span></h1>
                </div>
                <div className='flex-1'>
                    <img src="https://i.ibb.co/5rSBQff/vecteezy-children-fixing-toy-car-together-on-white-background.jpg" alt="" />
                </div>
            </div>


            {/* feature's */}
            <section>
                <h1 className='text-2xl lg:text-5xl text-center my-6'>Featured Products</h1>
                <div className='grid grid-cols-2 gap-2 lg:gap-4'>
                    <img src="https://i.ibb.co/JnDrMQW/pexels-nubia-navarro-nubikini-1522185.jpg" alt="" className="object-cover h-64 rounded-lg shadow-md w-full" />
                    <img src="https://i.ibb.co/0yRVQ0s/pexels-pixabay-35967.jpg" alt="" className="object-cover h-64 rounded-lg shadow-md w-full" />
                    <img src="https://i.ibb.co/k6zDM9t/pexels-hosein-ashrafosadat-243206.jpg" alt="" className="object-cover h-64 rounded-lg shadow-md w-full" />
                    <img src="https://i.ibb.co/RywSDCk/pexels-pixabay-35619.jpg" alt="" className="object-cover h-64 rounded-lg shadow-md w-full" />
                </div>
            </section>
        </div>
    );
};

export default Home;