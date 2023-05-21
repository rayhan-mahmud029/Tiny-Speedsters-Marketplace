import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

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
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <img
                            src="https://i.ibb.co/8j7hVjv/toy-7796918.jpg"
                            alt="Photo 1"
                            className="object-cover h-full rounded-lg shadow-md w-full "
                        />
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
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

                        <TabPanel
                            selectedTabPanelClassName='bg-white font-bold p-4'
                        >
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel
                            selectedTabPanelClassName='bg-white font-bold p-4'
                        >
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel
                            selectedTabPanelClassName='bg-white font-bold p-4'
                        >
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </Tabs>
                </div>

            </section>
        </div>
    );
};

export default Home;