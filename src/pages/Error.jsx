import React from 'react';
import { ImSad2 } from 'react-icons/im';

import { Link } from 'react-router';

const Error = () => {
    return (
        
        <div className=' p-10 '>
            
            <div className='bg-white w-11/12 mx-auto  rounded-4xl flex flex-col justify-center items-center py-15'>
            <h1 className='text-7xl'><ImSad2></ImSad2></h1>
            <h1 className='text-7xl text-center my-10'>404! </h1>
            <h1 className='text-4xl md:text-7xl text-center'>Opps! Page Not Found</h1>
            <Link to='/'><button  className='btn btn-success mt-10 btn-wide text-white font-bold md:text-xl'>Back To Home Page</button></Link>
            </div>
        </div>
    );
};

export default Error;