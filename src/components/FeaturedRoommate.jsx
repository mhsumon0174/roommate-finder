import React, { use, useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { AuthContext } from "../contexts/AuthContext";

const FeaturedRoommate = () => {
  
  const [featuredData, setFeaturedData] = useState([]);
  

  useEffect(() => {
    fetch("https://assignment-10-server-theta-three.vercel.app/roommates/featured")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedData(data);
      });
  }, []);
  return (
    <div>
      
      <div className="my-20 text-blue-900 bg-blue-50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-center my-10">Featured Roommates </h1>
        <div className="  rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       
       {
        featuredData.map((single,index)=><FeaturedCard single={single} key={index}></FeaturedCard>)
       }
      </div>
      </div>
    </div>
  );
};

export default FeaturedRoommate;
