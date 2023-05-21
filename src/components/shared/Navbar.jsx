import { faMailBulk, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
import { AuthContext } from '../../providers/AuthProvider';
import { Spinner } from 'flowbite-react';

const Navbar = () => {
    const { user, loading, authSignOut } = useContext(AuthContext);

    const handleLogout = () => {
        authSignOut().then(() => { }).catch(err => console.error(err.message))
    }

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
                <div className="flex gap-10 self-center flex-1 justify-center items-center text-lg">
                    <Link to='/'>Home</Link>
                    <Link to='/all-toys'>All Toys</Link>
                    <Link to='/add-toy'>Add Toy</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-4 bg-[#929292] rounded-full w-14 h-14 flex items-center text-white text-lg lg:text-xl outline outline-2 outline-dotted   outline-[#c3baba]'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    {loading ? <Spinner
                        color="success"
                        aria-label="Success spinner example"
                        size='xl'
                    /> :
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-lg btn-ghost btn-circle avatar">
                                    <div className="p-1 rounded-full">
                                        <img src={user.photoURL} className='rounded-full' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 relative">
                                    <div className='absolute top-0 left-0 -z-10 opacity-30 h-full w-full'>
                                        <img src="https://i.ibb.co/MnFTZwQ/Pngtree-mother-and-baby-background-toy-912495.jpg" alt="" className='object-cover h-full' />
                                    </div>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                        </> :
                            <Link to='/login'>
                                <button className="btn text-poppins bg-[#929292] rounded-full px-8 py-2">Login</button>
                            </Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;