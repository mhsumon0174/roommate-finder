import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyPost from '../components/MyPost';

const MyListing = () => {
    const roommates=useLoaderData()
    const [myPost,setMyPost]=useState(roommates)
    
    return (
        <div className='my-20  md:p-10 p-2 rounded-lg text-blue-900 bg-blue-50'>
            <h1 className="font-bold text-3xl text-center mb-10">
        Your Post
      </h1>
            <div className='   mx-auto mb-20'>
               <table className="w-full text-center border shadow-md rounded-lg">
          <thead className="bg-gray-100  text-gray-700 h-10 ">
            <tr className='border h-15'>
              <th className='border'>Photo</th>
              <th className='border'>Name</th>
              <th className='border'>Amount Limit</th>
              <th className='border'>Room Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {myPost.map((single, index) => (
              <MyPost key={index} myPost={myPost} setMyPost={setMyPost} single={single} />
            ))}
          </tbody>
        </table>
            </div>
        </div>
    );
};

export default MyListing;