import React, { use } from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { Link } from 'react-router';



const AllRoommate = ({ single }) => {
 


  const handleSeeMore = (_id) => {
    console.log(_id);
  };

  return (
    <tr className='border  h-25'>
      <td className='border'>
        
  {single?.photo ? (
    <img src={single.photo}  alt="Album" />
  ) : (
    <FaUserLarge className="text-5xl mx-auto " />
  )}

      </td>
      <td className="font-semibold border">{single.userName}</td>
      <td className="font-semibold border">{single.amount}</td>
      <td className="font-semibold border">{single.roomType}</td>
      <td>
        <Link to={`/roommatedetails/${single._id}`}>
          <button
            onClick={() => handleSeeMore(single._id)}
            className="btn btn-sm btn-outline btn-info "
          >
            See More
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllRoommate;
