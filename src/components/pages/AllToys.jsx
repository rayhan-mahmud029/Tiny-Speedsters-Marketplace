import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from "react-searchbox-awesome";
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allData, setData] = useState([]);
    const [orderAsc, setAscOrder] = useState(true);
    const [filtered, setFiltered] = useState([]);
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


    // search bar style
    const style = {
        width: "calc(50% )",
        color: "#333", // children inherit
        backgroundColor: "white", // children inherit
        fontSize: "1rem", // children inherit
        position: "absolute",
        top: "5rem",
        left: '25%',
        right: '25%',
        boxShadow: "0 0 28px 2px rgba(0,0,0,0.1)",
        border: "none",
        overflow: "hidden",

    };
    const style1 = {
        ...style,
        borderRadius: "15px",
        backgroundColor: "rgba(250,250,250,0.2)",
        zIndex: 9999,
        color: '#333'

    };

    // thats the style for the active element (hover, focus)
    const activeStyle2 = {
        backgroundColor: "rgba(255,230,230,.3)",
    };

    // handle search
    // here the data is filtered as you search
    const inputHandler = e => {
        const input = e.target.value.toLowerCase();
        if (input.length === 0) {
            setFiltered([]);
        } else {
            const result = allData.filter(obj => {
                return obj.name.toLowerCase().includes(input);
            });
            setFiltered(result);
        }
    };

    const clickHandler = e => {
        const searchitem = JSON.parse(e.target.dataset.searchitem);
        console.log("Click click!", searchitem);
        fetch(`http://localhost:5000/all-toys?term=name&query=${searchitem.name}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setSearched(true);
            })
            .catch(err => console.error(err.message));
    };

    const escHandler = e => {
        console.log("Escape pressed");
        fetch('http://localhost:5000/all-toys?limit=10&sort=price&order=asc')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setSearched(false);
            })
            .catch(err => console.error(err.message));
    };

    const searchRef = useRef(null);

    useEffect(() => {
        const inputRef = searchRef.current?.querySelector('input');
        console.log('searchRef.current:', searchRef.current);
        console.log('inputRef:', inputRef);

        const cleanup = () => {
            const inputRef = searchRef.current?.querySelector('input');
            if (inputRef) {
                inputRef.removeEventListener('input', inputHandler);
            }

            if (searchRef.current && searchRef.current.removeEventListener) {
                searchRef.current.removeEventListener('click', clickHandler);
            }

            if (document.removeEventListener) {
                document.removeEventListener('keydown', escHandler);
            }
        };

        inputRef?.addEventListener('input', inputHandler);
        searchRef.current?.addEventListener('click', clickHandler);
        document.addEventListener('keydown', escHandler);

        return cleanup;
    }, []);

      // dynamic title
      useTitle('Tiny Speedsters | All Toys')


    return (
        <div className='my-6 w-[95%] lg:w-[90%] mx-auto '>
            {/* search bar */}

            <div className='w-full flex flex-col gap-3 relative mb-20 justify-center'>
                <h1 className='text-2xl lg:text-4xl text-center'>All Toys</h1>
                <Search
                    data={filtered} // array of the objects is passed here. []{title: string}. each object is saved in dataset of the correspondent element.
                    mapping={{ title: "name" }} // when they don't correspond, allows to map the title of the search item and the name property in the filtered data.
                    style={style1} // child elements inherit some styles.
                    activeStyle={activeStyle2} // hover, focus, active color.
                    placeholder={"Search for states..."} // input placeholder.
                    shortcuts={true} // hide or show span elements that display shortcuts.
                    onInput={inputHandler}
                    onClick={clickHandler} // applies only to the list "li" element
                    onEsc={escHandler} // applies to the entire component
                />
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