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
                    <h3 className="text-lg lg:text-xl font-semibold ">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>
                        Both <b>access token</b> and <b>refresh token</b> are used in token-based authentication. For instance, JWT. <b>Access Token</b> issued to user for a short period of time after successful authentication to access tha data. While, <b>Refresh Token</b> issued along with <b>Access Token</b> to the user, which has relatively more expiry time and it is used to regenerate an <b>Access Token</b>
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        In API request, The server verifies the user's credentials and, if they are valid, generates an access token. Then it sends the access token back to the client. The client stores the access token securely.
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        As <b>Access Token</b> contains user's confidential data, we should store it securely in secured cookie.
                    </p>
                </TabPanel>

                <TabPanel
                    className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        Compare SQL and NoSQL databases?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>
                        <b>SQL</b> and <b>NoSQL</b> are two different kind of database management system.
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        <b>SQL</b> is relational database and it store data in table with rows and columns in a structured way. It enforce strict data integrity rules, including data types, constraints, and relationships between tables. SQL databases can scale vertically (by adding more resources to a single server) and horizontally (by distributing data across multiple servers). It can be acces by object relational mappers.
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        By contrast, <b>NoSQL</b> is anything that is non-relational. It has various structures implementation namely, table, document, graph. In document type data is being stored as key-value pair. It designed to scale horizontally with high performance. Can be access through REST API's and CRUD using vendor specific language.
                    </p>

                </TabPanel>

                <TabPanel
                    className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is express js? What is Nest JS?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>
                        <b>Express JS</b> and <b>Nest JS</b> are popular web application frameworks.
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        <b>Express JS</b> is for Node.js, provides features and utilities for building web servers and APIs. better exemplified by features like, routing mechanism, middleware support, template engine. It is simple and has lightweight that allows developer to make web application quickly.
                    </p>
                    <p className='text-sm mt-4 mx-6'>
                        By contrast, <b>Nest JS</b> is typescript based progressive web framework. Mainly it is a Node.js framework intended to be used with TypeScript to build scalable and efficient server-side applications.
                    </p>

                </TabPanel>

                <TabPanel
                    className='my-8 bg-slate-50 shadow-md p-4 lg:p-8 rounded-md'
                >
                    <h3 className="text-lg lg:text-xl font-semibold">
                        What is MongoDB aggregate and how does it work?
                    </h3>

                    <p className='text-sm mt-4 mx-6'>
                        <b>MongoDB aggregate</b> allows to process and transform data using a pipeline of stages. It is a powerful framework for performing data aggregation operations on collections within a MongoDB database.
                    </p>

                    <p className='text-sm mt-4 mx-6'>
                        Aggregation pipelines can have one or more "stages". Each stage in the pipeline performs a specific operation, such as filtering, grouping, sorting, projecting, or performing computations on the data. The input for the aggregation pipeline is typically a collection in the MongoDB database.
                        <code className='p-0 m-1 bg-neutral-200'>$out</code>  aggregation stage writes the returned documents from the aggregation pipeline to a collection.
                    </p>

                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Blogs;