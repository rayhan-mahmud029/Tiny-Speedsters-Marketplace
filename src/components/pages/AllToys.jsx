import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from "react-searchbox-awesome";
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allData, setData] = useState([]);
    const [orderAsc, setAscOrder] = useState(true);
    const [searched, setSearched] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/all-toys?limit=10&sort=price&order=asc')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.error(err.message))
    }, [])

    const handleSeeMore = () => {
        fetch(`http://localhost:5000/all-toys?sort=price&order=${orderAsc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.error(err.message))
    }

    const handlePriceSort = () => {
        console.log('clicked');
        fetch(`http://localhost:5000/all-toys?limit=10&sort=price&order=${orderAsc ? 'dsc' : 'asc'}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setAscOrder(!orderAsc);
            })
            .catch(err => console.error(err.message))
    }



    const handleSearch = e => {
        const element = document.getElementById('search');
        const query = element.value;

        console.log(query);
        fetch(`http://localhost:5000/all-toys?term=name&query=${query}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setSearched(true);
            })
            .catch(err => console.error(err.message));
    }


    useTitle('Tiny Speedsters | All Toys')


    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto '>
            {/* search bar */}

            <div className='w-full flex flex-col gap-3 relative mb-20 justify-center'>
                <h1 className='text-2xl lg:text-4xl text-center'>All Toys</h1>
                <div className="form-control ">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-1/2" id='search' />
                        <button className="btn btn-square" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto w-full text-poppins my-3">
                {searched && <p>Press `esc` to see all data</p>}
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>
                                <button onClick={handlePriceSort} className='flex gap-1 items-center btn btn-ghost btn-xs'>
                                    Price
                                    {orderAsc ? <FaArrowDown /> : <FaArrowUp />}
                                </button>
                            </th>
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
                <div className="w-full flex justify-center flex-col">
                    <p className='text-center text-lg py-2'>Toys: {allData.length}</p>
                    {
                        allData.length >= 10 && <button className={`btn btn-outline w-1/4 mx-auto ${allData.length > 10 && 'hidden'}`} onClick={handleSeeMore}>See All</button>
                    }
                </div>

            </div>
        </div>
    );
};


const ToyRow = ({ toy }) => {
    const { _id, picture, name, sellerName, sellerEmail, price, availableQuantity, category } = toy;

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
            <td>${price} </td>
            <th className='text-neutral-500'>{availableQuantity}</th>
            <th className='p-1'>
                <Link to={`/toy/${_id}`}>
                    <Button outline={true} className='bg-gray-500' size='xs'>
                        <FaArrowRight className="h-2 w-4" />
                    </Button>
                </Link>
            </th>
        </tr>
    );

}
export default AllToys;