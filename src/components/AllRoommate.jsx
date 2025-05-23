import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Loading from './Loading';

const AllRoommate = ({ single }) => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const handleSeeMore = (_id) => {
    console.log(_id);
  };

  return (
    <tr className='w-1/2'>
      <td>
        <img
          src={single.photo}
          alt="user"
          className="w-12 mx-auto h-12 rounded "
        />
      </td>
      <td className="font-semibold">{single.userName}</td>
      <td>{single.amount}</td>
      <td>{single.roomType}</td>
      <td>
        <Link to={`/roommatedetails/${single._id}`}>
          <button
            onClick={() => handleSeeMore(single._id)}
            className="btn btn-sm btn-info text-white"
          >
            See More
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllRoommate;
