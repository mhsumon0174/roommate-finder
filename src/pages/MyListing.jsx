import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyPost from '../components/MyPost';

const MyListing = () => {
    const roommates=useLoaderData()
    const [myPost,setMyPost]=useState(roommates)
    
    return (
        <div className='my-20 p-10 rounded-lg text-blue-900 bg-blue-50'>
            <div className='w-11/12 mx-auto '>
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