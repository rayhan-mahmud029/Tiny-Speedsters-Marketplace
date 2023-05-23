import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { ToyCard } from './ToyCard';
import { FaMailchimp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [allToys, setToys] = useState([]);
    const [sportsCars, setSportsCars] = useState([])
    const [trucks, setTrucks] = useState([])
    const [policeCars, setPoliceCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
            .catch(err => console.error(err.message))

    }, [])

    useEffect(() => {
        const sportsCars = allToys.filter(item => item.category === 'Sports Car').slice(0, 3);
        const trucks = allToys.filter(item => item.category === 'Truck').slice(0, 3);
        const cars = allToys.filter(item => item.category === 'Police Car').slice(0, 3);

        setSportsCars(sportsCars);
        setTrucks(trucks);
        setPoliceCars(cars);
    }, [allToys]);

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
                <h1 className='text-2xl lg:text-5xl text-center my-6'>Featured Gallery</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-1 row-span-1">
                        <img
                            src="https://i.ibb.co/8j7hVjv/toy-7796918.jpg"
                            alt="Photo 1"
                            className="object-cover h-full rounded-lg shadow-md w-full "
                        />
                    </div>
                    <div className="col-span-2 row-span-2 grid grid-cols-2 gap-4">
                        <img
                            src="https://i.ibb.co/JnDrMQW/pexels-nubia-navarro-nubikini-1522185.jpg"
                            alt="Photo 2"
                            className="object-cover h-64 rounded-lg shadow-md"
                        />
                        <img
                            src="https://i.ibb.co/0yRVQ0s/pexels-pixabay-35967.jpg"
                            alt="Photo 3"
                            className="object-cover h-64 rounded-lg shadow-md"
                        />
                        <img
                            src="https://i.ibb.co/k6zDM9t/pexels-hosein-ashrafosadat-243206.jpg"
                            alt="Photo 4"
                            className="object-cover h-64 rounded-lg shadow-md"
                        />
                        <img
                            src="https://i.ibb.co/RywSDCk/pexels-pixabay-35619.jpg"
                            alt="Photo 5"
                            className="object-cover h-64 rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>


            {/* Shop by categories section */}
            <section className='my-4 py-4'>
                <h1 className='text-center text-2xl lg:text-5xl'>Categories</h1>
                <p className='text-center text-neutral-500'>Unleash your kids favorite type of speedster</p>

                <div className='my-4'>
                    <Tabs>
                        <TabList
                            className='relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition'
                        >
                            <Tab
                                className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                                selectedClassName='bg-white rounded-full'

                            >
                                <span className='text-gray-800'>Sports Car</span>
                            </Tab>
                            <Tab
                                className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                                selectedClassName='bg-white rounded-full'

                            >
                                <span className='text-gray-800'>Truck</span>
                            </Tab>
                            <Tab
                                className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                                selectedClassName='bg-white rounded-full'

                            >
                                <span className='text-gray-800'>Police Car</span>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-8'>
                                {sportsCars.map(toy => <ToyCard
                                    key={toy._id}
                                    toy={toy} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-8'>
                                {trucks.map(truck => <ToyCard
                                    key={truck._id}
                                    toy={truck} />)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-8'>
                                {policeCars.map(policeCar => <ToyCard
                                    key={policeCar._id}
                                    toy={policeCar} />)}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

            </section>


            {/* Shop by age section */}
            <section className='my-4 py-4'>
                <h1 className='text-center text-2xl lg:text-5xl mb-2'>Shop By Age</h1>
                <p className='text-center text-neutral-500'>Toys Wonderland for Kids</p>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-4 lg:my-6">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-44 h-44 bg-slate-500 rounded-full relative'>
                            <img src="https://i.ibb.co/VpFmWrL/4853433.jpg" alt="" className='absolute w-44 h-44  rounded-full top-0 object-cover ' />
                            <img src="https://i.ibb.co/ZgJwtr7/kindpng-2122609.png" alt="" className='absolute top-0 w-full  z-20 self-center object-cover' />
                            <div className='z-10 border-neutral-400 w-40 h-40 rounded-full border-dashed border-2 absolute top-2 left-2'></div>

                        </div>
                        <p className=' text-poppins font-medium text-center mt-2'>For Baby</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-44 h-44 bg-slate-500 rounded-full relative'>
                            <img src="https://i.ibb.co/PxMX6Gs/17580.jpg" alt="" className='absolute w-44 h-44  rounded-full top-0 object-cover ' />
                            <img src="https://i.ibb.co/ZgJwtr7/kindpng-2122609.png" alt="" className='absolute top-0 w-full  z-20 self-center object-cover' />
                            <div className='z-10 border-neutral-400 w-40 h-40 rounded-full border-dashed border-2 absolute top-2 left-2'></div>
                        </div>
                        <p className=' text-poppins font-medium text-center mt-2'>2 to 6 years</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-44 h-44 bg-slate-500 rounded-full relative'>
                            <img src="https://i.ibb.co/PxMX6Gs/17580.jpg" alt="" className='absolute w-44 h-44  rounded-full top-0 object-cover ' />
                            <img src="https://i.ibb.co/ZgJwtr7/kindpng-2122609.png" alt="" className='absolute top-0 w-full  z-20 self-center object-cover' />
                            <div className='z-10 border-neutral-400 w-40 h-40 rounded-full border-dashed border-2 absolute top-2 left-2'></div>
                        </div>
                        <p className=' text-poppins font-medium text-center mt-2'>7 to 10 years</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-44 h-44 bg-slate-500 rounded-full relative'>
                            <img src="https://i.ibb.co/PxMX6Gs/17580.jpg" alt="" className='absolute w-44 h-44  rounded-full top-0 object-cover ' />
                            <img src="https://i.ibb.co/ZgJwtr7/kindpng-2122609.png" alt="" className='absolute top-0 w-full  z-20 self-center object-cover' />
                            <div className='z-10 border-neutral-400 w-40 h-40 rounded-full border-dashed border-2 absolute top-2 left-2'></div>
                        </div>
                        <p className=' text-poppins font-medium text-center mt-2'>11 years & up</p>
                    </div>
                </div>
            </section>


            {/* Newsletter Section */}
            <section className='my-4 py-4 flex flex-col justify-center items-center w-full'>

                <h1 className='text-center text-2xl lg:text-5xl mb-2'>Newsletter</h1>
                <p className='text-center text-neutral-500'>Speedy Playtime Thrills</p>

                <div className='flex relative my-5 w-1/2 justify-center'>
                    <input type="email" className='p-3 w-full border border-[#09CCD0] rounded-md text-poppins text-neutral-600' placeholder='Enter email'/>
                    <div className="absolute end-0 bg-[#09CCD0] rounded-e-md w-14 h-full flex justify-center items-center hover:bg-[#FF6F69]">
                        <FontAwesomeIcon icon={faEnvelope} className='text-2xl mx-1 text-white'/>
                    </div>
                </div>

            </section>

        </div>
    );
};



export default Home;