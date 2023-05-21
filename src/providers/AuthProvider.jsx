import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();



    // authentication with email and password
    const authRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user info
    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // google authentication
    const authLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // authentication state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    // auth sign out
    const authSignOut = () => {
        return signOut(auth)
    }



    const userInfo = {
        authRegister,
        authLogin,
        setUser,
        setLoading,
        loading,
        user,
        updateUserInfo,
        authLoginWithGoogle,
        authSignOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;