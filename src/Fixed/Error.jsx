import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white">
            <h1 className="text-8xl font-bold my-7">404</h1>
            <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
            <p className="mt-4">We encountered an error. Please try again later.</p>
            <Link to={'/'}>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Go Home
                </button></Link>
        </div>
    );
}

export default ErrorPage;
