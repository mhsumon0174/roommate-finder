import React, { use } from 'react';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { MdDelete, MdOutlinePreview } from 'react-icons/md';
import { Link } from 'react-router';



const MyPost = ({ single }) => {
 


  const handleSeeMore = (_id) => {
    console.log(_id);
  };

  return (
    <tr className='border  h-25'>
      <td className='border'>
        <img
          src={single.photo}
          alt="user"
          className="w-12 mx-auto h-12 rounded "
        />
      </td>
      <td className="font-semibold border">{single.userName}</td>
      <td className="font-semibold border">{single.amount}</td>
      <td className="font-semibold border">{single.roomType}</td>
      <td className='flex flex-col gap-2 my-2'>
        <Link to={`/roommatedetails/${single._id}`}>
          <button
            onClick={() => handleSeeMore(single._id)}
            className="btn btn-sm btn-outline btn-info "
          >
          <FaEye />
          </button>
          
        </Link>
        <Link to={`/roommatedetails/${single._id}`}>
          <button
            onClick={() => handleSeeMore(single._id)}
            className="btn btn-sm btn-outline btn-info "
          >
            <FiEdit />
          </button>
          
        </Link>
        <Link to={`/roommatedetails/${single._id}`}>
          <button
            onClick={() => handleSeeMore(single._id)}
            className="btn btn-sm btn-outline btn-info "
          >
           <MdDelete />
          </button>
          
        </Link>
      </td>
    </tr>
  );
};

export default MyPost;
