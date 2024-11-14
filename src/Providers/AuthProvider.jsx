/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // ----------------create Account----------------------
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ----------------Login account---------------------
    const InUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //--------------------google login---------------------
    const provider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    // ----------------------remember login---------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
            else {
                setUser(null)
            }

        })


        return () => {
            unsubscribe();
        }
    }, [])

    // ---------------------logout user--------------------
    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }


    const authInfo = {
        name: 'Nodi',
        createUser,
        InUser,
        user,
        logOut,
        loading,
        GoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* Main part which will have all access to the context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;