import { Link } from "react-router-dom";
import "./Banner.css"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
            {/* Animated Particle Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="particle-animation"></div>
            </div>

            {/* Banner Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg my-5 font-serif">
                    Wel<span className="text-sky-300">come</span> to K-APP
                </h1>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Discover the <span className="text-yellow-300">Future</span> of Reading
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                    Dive into thousands of books, connect with readers, and unlock endless knowledge.
                </p>

                {
                    user ? <>
                        <Link to={'/products'}>
                            <button className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
                                See All Books
                            </button>
                        </Link>
                    </> :
                        <>
                            <Link to={'/logIn'}>
                                <button className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
                                    Log In
                                </button>
                            </Link>
                            <Link to={'/signup'}>
                                <button className="mt-8 mx-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-300 shadow-lg">
                                    Sign Up
                                </button></Link>
                        </>
                }


            </div>
        </div>

    );
};

export default Home;