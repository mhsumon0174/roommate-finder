import React from "react";
import { useLoaderData } from "react-router";
import AllRoommate from "../components/AllRoommate";

const BrowseListing = () => {
  const roommates = useLoaderData();

  return (
    <div className="my-20">
      <h1 className="font-bold text-3xl text-center mb-10">
        All Available Post For You
      </h1>

      
        <table className="table w-11/12  mx-auto text-center border shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700 ">
          <tr className="">
            <th>Photo</th>
            <th>Name</th>
            <th>Rent Limit</th>
            <th>Room Type</th>
            <th>Action</th>
          </tr>
        </thead>
        {
            roommates.map((single,index)=><AllRoommate key={index} single={single}></AllRoommate>)
        }
        </table>
        
        
      
    </div>
  );
};

export default BrowseListing;
