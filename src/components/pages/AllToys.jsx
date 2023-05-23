import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allData = useLoaderData();

    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto'>
            <h1 className='text-2xl lg:text-4xl text-center my-3'>All Toys</h1>

            <div className="overflow-x-auto w-full text-poppins my-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Available Q:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allData.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy} />)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};


const ToyRow = ({ toy }) => {
    const { picture, name, sellerName, sellerEmail, price, availableQuantity, category } = toy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="toy photo" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
            </td>
            <td>${price}</td>
            <th className='text-neutral-500'>{availableQuantity}</th>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );

}
export default AllToys;