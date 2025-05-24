import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { FaUserLarge } from "react-icons/fa6";

const RoommatesDetails = () => {
  const { user } = use(AuthContext);
  const [sameUser, setSameUser] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [count, setCount] = useState(0);

  const roommate = useLoaderData();
  
  useEffect(() => {
    if (user?.email == roommate.email) {
      setSameUser(true);
    } else {
      setSameUser(false);
    }
  }, []);
  const handleLike = () => {
    setShowNumber(true);
    if (sameUser) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: 'You cant like your own post',
      });
      return;
    }
    setCount(count + 1);
  };

  return (
    <div className="mt-10 pt-5  mb-20 rounded-lg text-blue-900 bg-blue-50">
      <h1 className="text-3xl font-bold text-center p mb-5 bg-amber-300 w-fit mx-auto px-5 p-3 rounded-2xl">
        {count} People Interested In
      </h1>
      <div className="p-3">
        <div className="card mb-20  flex items-center  shadow-sm">
        <div>
          <div>
            <figure>
  {roommate?.photo ? (
    <img src={roommate.photo} alt="Album" />
  ) : (
    <FaUserLarge className="text-5xl text-gray-500" />
  )}
</figure>
          </div>
          <p className="mt-2 text-center ">{roommate.email}</p>
          <div className="card-body">
            <h2 className="text-2xl font-bold">{roommate.userName}</h2>
            <h4>{roommate.title}</h4>
            <p className="text-lg font-semibold">
              Description:
              <span className="text-sm">{roommate.description}</span>
            </p>

            <p className="text-lg font-semibold">
              Rent Limit:<span className="text-sm">{roommate.amount}</span>
            </p>
            <p className="text-lg font-semibold">
              Personal Info:<span className="text-sm">{roommate.contact}</span>
            </p>
            <p className="text-lg font-semibold">
              LifeStyle:
              <span className="text-sm">{roommate.lifeStyle_Preferences}</span>
            </p>
            <p className="text-lg font-semibold">
              Location:<span className="text-sm">{roommate.location}</span>
            </p>
            <p className="text-lg font-semibold">
              Room Type:<span className="text-sm">{roommate.roomType}</span>
            </p>

            <div className="card-actions mt-3">
              <button onClick={handleLike} className="btn btn-outline btn-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                 fill={sameUser ? "black" : showNumber ? "red" : ""}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke=""
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Like
              </button>
            </div>
            <p
              className={`text-lg font-semibold ${
                showNumber ? "block" : "hidden"
              }`}
            >
              Contact Number:{" "}
              <span className="text-sm">{roommate.contactNumber}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RoommatesDetails;
