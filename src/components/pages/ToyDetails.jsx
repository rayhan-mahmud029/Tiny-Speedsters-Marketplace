import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    return (
        <div>
            <h1>toy details here</h1>
        </div>
    );
};

export default ToyDetails;