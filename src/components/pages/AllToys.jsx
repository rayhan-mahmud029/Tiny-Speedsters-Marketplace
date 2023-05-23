import { button } from '@material-tailwind/react';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [allData, setData] = useState([]);
    const [orderAsc, setAscOrder] = useState(true);

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
                            <th>
                                <button onClick={handlePriceSort}  className='flex gap-1 items-center btn btn-ghost btn-xs'>
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