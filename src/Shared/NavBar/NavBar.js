import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const navItems = <React.Fragment>
        {user?.uid ?
            <div className='flex'>
                <div>
                    <button className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-outline btn-success btn-sm">
                        About
                        </button>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><p>User: {user.displayName}</p>
                            </li>
                            <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/dashboard'>About</Link></li>
                            <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link onClick={handleLogOut}>Sign out</Link></li>
                        </ul>
                    </button>
                </div>
            </div>
            : <button className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-outline btn-success btn-sm">
                Join Us
            </button>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/login'>Sign In</Link></li>
                <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/signup'>Sign Up</Link></li>
            </ul>
        </button>}
    </React.Fragment>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/'>Home</Link></li>
                        <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/media'>Media</Link></li>
                        <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/message'>Message</Link></li>
                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case font-bold text-2xl text-green-700">Poppers</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:font-bold relative group'>
                            <Link to='/'>
                                <span>Home</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </Link>
                        </li>
                        <li className='hover:font-bold relative group'>
                            <Link to='/media'>
                                <span>Media</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </Link>
                        </li>
                        <li className='hover:font-bold relative group'>
                            <Link to='/message'>
                                <span>Message</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-fuchsia-600 group-hover:w-1/2 group-hover:transition-all"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {navItems}
                </div>
            </div>
        </div>
    );
};

export default NavBar;