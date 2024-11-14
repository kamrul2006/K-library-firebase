import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    //-----------------------------Sign out btn activity---------------------
    const HandleSignOut = () => {
        logOut()
            .then(() => { console.log('Signed Out Success Fully.') })
            .catch(err => console.log(err))
    }

    //----------------------------- Nav bar links -------------------------
    const link =
        <>
            <li><Link to={'/'}>Home</Link></li>
            {user && <>
                <li><Link to={'/products'}>Product</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
            </>}
            <li><Link>About Us</Link></li>
        </>


    return (
        <div className="sticky top-0">
            <div className="navbar bg-sky-200 md:px-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-sm btn-circle btn-ghost lg:hidden">
                            <img className="w-10" src="https://img.icons8.com/clouds/100/menu.png" alt="menu" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link className="md:text-3xl font-serif font-bold">K-Library</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ?
                        <button onClick={HandleSignOut} className="btn btn-sm md:btn-md btn-warning">Sign Out</button> :
                        <>
                            <Link to={'/logIn'} className="btn btn-sm md:btn-md mx-2 btn-info">Log In</Link>
                            <Link to={'/signup'} className="btn btn-sm md:btn-md btn-secondary">SignUp</Link>
                        </>
                    }

                </div>
                <div className="mx-5 hidden md:block">
                    {user?.email}
                </div>
            </div>
        </div>
    );
};



export default NavBar;