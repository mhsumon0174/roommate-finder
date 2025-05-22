import React from 'react';
import { useLoaderData } from 'react-router';

const RoommatesDetails = () => {
    const roommate=useLoaderData()
    console.log(roommate);
    
    return (
        <div>
            <div className="card my-20 p-5 flex items-center w-8/11 mx-auto  border shadow-sm">
  <div>
    <div>
        <figure>
    <img
      src={roommate.photo}
      alt="Album" />
      
  </figure>
    </div>
  <p className='mt-2 text-center '>{roommate.email}</p>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{roommate.userName}</h2>
    <h4>{roommate.title}</h4>
    <p className='text-lg font-semibold'>Description:<span className='text-sm'>{roommate.description}</span></p>

    <p className='text-lg font-semibold'>Rent Limit:<span className='text-sm'>{roommate.amount}</span></p>
    <p className='text-lg font-semibold'>Personal Info:<span className='text-sm'>{roommate.contact}</span></p>
   <p className='text-lg font-semibold'>LifeStyle:<span className='text-sm'>{roommate.lifeStyle_Preferences}</span></p>
    <p className='text-lg font-semibold'>Location:<span className='text-sm'>{roommate.location}</span></p>
    <p className='text-lg font-semibold'>Room Type:<span className='text-sm'>{roommate.roomType}</span></p>
    
    
    <div className="card-actions mt-3">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default RoommatesDetails;