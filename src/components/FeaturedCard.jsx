import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({single}) => {
    const handleSeeMore=(_id)=>{
        console.log(_id);
        
    }
    
    return (
        <div>
             <div className="card p-4 card-side border shadow-sm">
          <figure>
            <img
              src={single.photo}
              alt="Movie"
              className='rounded'
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">{single.userName}</h2>
            <p className='text-xl font-semibold'>
                Rent Limit: {single.amount}
            </p>
            <p className='text-lg '>
                Room Type: {single.roomType}
            </p>
            <div className="card-actions justify-end">
              <Link to={`roommatedetails/${single._id}`}><button onClick={()=>handleSeeMore(single._id)} className="btn btn-outline btn-info">See More</button></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default FeaturedCard;