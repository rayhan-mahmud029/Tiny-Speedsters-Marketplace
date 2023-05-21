import React, { createContext, useState } from 'react';
import { EmailAuthCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState('')
    const auth = getAuth(app);


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



    const userInfo = {
        authRegister,
        authLogin,
        setUser,
        updateUserInfo
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;