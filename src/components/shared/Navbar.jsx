import { faMailBulk, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';

const Navbar = () => {
    return (
        <div className='py-6 bg-[] border-b border-neutral-400'>
            <div style={{ transform: 'rotate(180deg)', height: '10px' }}>
                <Wave fill='#01B0ED'
                    paused={false}
                    options={{
                        height: 5,
                        amplitude: 6,
                        speed: 0.15,
                        points: 10,
                    }} />
            </div>
            <div className='flex w-[80%] justify-around mx-auto items-center my-2'>
                <div className='flex'>
                    <img src="" alt="" />
                    <Link to='' className='flex gap-3 items-center'>
                        <img src="https://i.ibb.co/1MM33P6/kindpng-2104250.png" alt="" className='w-18 h-14' />
                        <div>
                            <h1 className='text-xl lg:text-3xl font-bold text-[#c3baba] '>Tiny<span className='text-[#929292]'>Speedsters</span></h1>
                            <p>Baby's Equipment</p>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-10 self-center flex-1 justify-center items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/all-toys'>All Toys</Link>
                    <Link to='/add-toy'>Add Toy</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <Link to='/login'><button className="btn text-poppins bg-[#929292] rounded-full px-8 py-2">Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;