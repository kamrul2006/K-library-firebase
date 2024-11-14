/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRought = ({ children }) => {


    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="mx-auto text-center  my-10">
            <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
    }
    else if (user) {
        return children
    }

    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRought;