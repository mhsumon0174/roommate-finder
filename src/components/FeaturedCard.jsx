import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router";

const FeaturedCard = ({ single }) => {
  const handleSeeMore = (_id) => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="flex flex-col  card p-4 card-side border shadow-sm">
        <div>
          <figure>
            {single?.photo ? (
              <img src={single.photo} className="md:w-[200px] md:h-[200px] w-[150px] h-[150px]" alt="Album" />
            ) : (
              <FaUserLarge className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] text-gray-500" />
            )}
          </figure>
        </div>
        <div className="card-body">
          <h2 className="md:text-2xl text-xl font-bold">{single.userName}</h2>
          <p className="md:text-xl text-lg font-semibold">Rent Limit: {single.amount}</p>
          <p className="text-lg ">Room Type: {single.roomType}</p>
          <div className="card-actions justify-end">
            <Link to={`roommatedetails/${single._id}`}>
              <button
                onClick={() => handleSeeMore(single._id)}
                className="btn btn-outline btn-info"
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
