import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allData, setData] = useState([]);
    const [orderAsc, setAscOrder] = useState(true);
    const [searched, setSearched] = useState(false);


    useEffect(() => {
        fetch('https://tiny-speedsters-server.vercel.app/all-toys?limit=20&sort=price&order=asc')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => toast.error(`Error: ${err.message}`))
    }, [])

    const handleSeeMore = () => {
        fetch(`https://tiny-speedsters-server.vercel.app/all-toys?sort=price&order=${orderAsc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => toast.error(`Error: ${err.message}`))
    }

    const handlePriceSort = () => {
        fetch(`https://tiny-speedsters-server.vercel.app/all-toys?limit=20&sort=price&order=${orderAsc ? 'dsc' : 'asc'}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setAscOrder(!orderAsc);
            })
            .catch(err => toast.error(`Error: ${err.message}`))
    }



    const searchElement = document.getElementById('search');
    const handleSearch = e => {
        const query = searchElement.value;
        const names = allData.map(name => name.name)
        const searchItem = names.find(name => name.toLowerCase().includes(query.toLowerCase()));


        fetch(`https://tiny-speedsters-server.vercel.app/all-toys?term=name&query=${searchItem}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setSearched(true);
            })
            .catch(err => console.error(err.message));
    }

    if (searchElement) {
        searchElement.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const query = searchElement.value;
                const names = allData.map(name => name.name)
                const searchItem = names.find(name => name.toLowerCase().includes(query.toLowerCase()));


                fetch(`https://tiny-speedsters-server.vercel.app/all-toys?term=name&query=${searchItem}`)
                    .then(res => res.json())
                    .then(data => {
                        setData(data);
                        setSearched(true);
                    })
                    .catch(err => toast.error(`Error: ${err.message}`)
                    );
            }
        })
    }


    useTitle('Tiny Speedsters | All Toys')


    // Esc detect
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.key == 'Escape') {
            fetch('https://tiny-speedsters-server.vercel.app/all-toys?limit=20&sort=price&order=asc')
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setSearched(false);
                })
                .catch(err => toast.error(`Error: ${err.message}`))
        }
    };

    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto '>
            {/* search bar */}

            <div className='w-full flex flex-col gap-3 relative mb-20 justify-center'>
                <h1 className='text-2xl lg:text-4xl text-center'>All Toys</h1>
                <div className="form-control ">
                    <div className="input-group">
                        <input type="text" placeholder="Search by name…" className="input input-bordered w-1/2" id='search' />
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
                        allData.length >= 20 && <button className={`btn btn-outline w-1/4 mx-auto ${allData.length > 20 && 'hidden'}`} onClick={handleSeeMore}>See All</button>
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