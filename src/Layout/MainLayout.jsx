import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const black={
        color:'white',
        backgroundColor:'black'
    }
    const white={
        color:'black',
        backgroundColor:'white'
    }
    const [btn,setBtn]=useState(false)
    const [style,setStyle]=useState(white)
    useEffect(()=>{
        if(btn){
setStyle(black)
    }
    else{
        setStyle(white)
    }
    },[btn])
    return (
        <div style={style}>
            <Navbar btn={btn} setBtn={setBtn}></Navbar>
            <div className='min-h-[400px] w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;