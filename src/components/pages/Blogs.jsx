import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
      // dynamic title
      useTitle('Tiny Speedsters | Blogs')
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl text-center lg:text-5xl mx-auto'>Blogs</h1>

            {/* Questions on react tabs */}
            <Tabs className='my-6 text-poppins'>
                <TabList
                    className='relative w-max mx-auto h-12 grid grid-cols-4 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition'
                >
                    <Tab
                        className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                        selectedClassName='bg-white rounded-full'

                    >
                        <span className='text-gray-800'>Q1</span>
                    </Tab>
                    <Tab
                        className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                        selectedClassName='bg-white rounded-full'

                    >
                        <span className='text-gray-800'>Q2</span>
                    </Tab>
                    <Tab
                        className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                        selectedClassName='bg-white rounded-full'

                    >
                        <span className='text-gray-800'>Q3</span>
                    </Tab>
                    <Tab
                        className='relative block h-10 px-6 py-1 lg:text-xl tab rounded-full'
                        selectedClassName='bg-white rounded-full'

                    >
                        <span className='text-gray-800'>Q4</span>
                    </Tab>
                </TabList>

                <TabPanel 
                className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>An access token is a short-lived credential obtained after successful authentication, used to authorize access to protected resources. A refresh token is a long-lived token used to obtain new access tokens without reauthentication. Access tokens are typically stored in memory or short-lived storage like local storage, while refresh tokens are stored in more secure mechanisms like HTTP-only cookies.</p>

                </TabPanel>

                <TabPanel 
                className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>An access token is a short-lived credential obtained after successful authentication, used to authorize access to protected resources. A refresh token is a long-lived token used to obtain new access tokens without reauthentication. Access tokens are typically stored in memory or short-lived storage like local storage, while refresh tokens are stored in more secure mechanisms like HTTP-only cookies.</p>

                </TabPanel>

                <TabPanel 
                className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>An access token is a short-lived credential obtained after successful authentication, used to authorize access to protected resources. A refresh token is a long-lived token used to obtain new access tokens without reauthentication. Access tokens are typically stored in memory or short-lived storage like local storage, while refresh tokens are stored in more secure mechanisms like HTTP-only cookies.</p>

                </TabPanel>

                <TabPanel 
                className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>An access token is a short-lived credential obtained after successful authentication, used to authorize access to protected resources. A refresh token is a long-lived token used to obtain new access tokens without reauthentication. Access tokens are typically stored in memory or short-lived storage like local storage, while refresh tokens are stored in more secure mechanisms like HTTP-only cookies.</p>

                </TabPanel>
         
            </Tabs>
        </div>
    );
};

export default Blogs;