import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user);
    
    const provider=new GoogleAuthProvider;
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });
    return ()=>{
unSubscribe();
    }
},[])
const logOut=()=>{
    return signOut(auth)
}

    const info={logOut,signInUser,createUser,googleSignIn,user,setUser}
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;