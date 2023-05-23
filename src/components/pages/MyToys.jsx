import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaArrowDown, FaArrowRight, FaArrowUp, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/toys/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data)
            })
            .catch(err => console.error(err.message))
    }, [])


    const handleDelete = id => {
        fetch(`http://localhost:5000/toy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    confirm('Are you sure?')
                    alert('Item deleted')
                    const remaining = myToys.filter(toy => toy._id !== id)
                    setMyToys(remaining)
                }

            })
            .catch(err => console.error(err.message))
    }

    const handleUpdate = e => {

    }

    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto '>
            <h1 className='text-2xl lg:text-4xl text-center'>Your Toys</h1>
            <div className='text-poppins'>
                <p><span className="font-semibold">Name:</span> {user.displayName}</p>
                <p><span className="font-semibold">Email:</span> {user.email}</p>
            </div>

            <table className="table w-full my-6 text-poppins">

                <tbody>


                    {
                        myToys.map(toy => <ToyRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate} />)
                    }



                </tbody>
            </table>


        </div>
    );
};


const ToyRow = ({ toy, handleDelete, handleUpdate }) => {
    const { _id, picture, name, price, availableQuantity, category, description } = toy;

    return (
        <tr >
            <td >
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-md w-52 h-32 overflow-hidden">

                            <img src={picture} alt="toy photo"
                                className='w-full h-full object-cover transform hover:scale-110  transition-transform duration-300'
                            />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className="flex w-full justify-between">
                            <div>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">{category}</div>
                            </div>
                            <div className='text-end flex flex-col gap-2'>
                                <p>
                                    <span className="font-medium">Price:</span>  ${price}
                                </p>
                                <p>
                                    <span className="font-medium">Available Q:</span> {availableQuantity}
                                </p>
                            </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>


            </td>
            <td>
                <div className="flex gap-2 items-center justify-center w-1/4">
                    <button className='btn btn-ghost' onClick={() => handleDelete(_id)}><FaTrash /></button>

                    <Link to={`/update/${_id}`}>
                        <label className='btn btn-xs'>update</label>
                    </Link>

                    <div >
                        <Link to={`/toy/${_id}`}>
                            <Button outline={true} className='bg-gray-500' size='xs'>
                                <FaArrowRight className="h-2 w-4" />
                            </Button>
                        </Link>

                    </div>
                </div>
            </td>
        </tr>
    );

}


export default MyToys;