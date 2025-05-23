import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    console.log(user);
    
    const provider=new GoogleAuthProvider;
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
unSubscribe();
    }
},[])
const logOut=()=>{
    return signOut(auth)
}
const updateUser=(updatedData)=>{
return updateProfile(auth.currentUser,updatedData)
}

    const info={loading,setLoading,updateUser,logOut,signInUser,createUser,googleSignIn,user,setUser}
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;