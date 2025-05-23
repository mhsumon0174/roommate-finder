import React, { use, useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { AuthContext } from "../contexts/AuthContext";

const FeaturedRoommate = () => {
  
  const [featuredData, setFeaturedData] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/roommates/featured")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedData(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Roommates </h1>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       {
        featuredData.map((single,index)=><FeaturedCard single={single} key={index}></FeaturedCard>)
       }
      </div>
    </div>
  );
};

export default FeaturedRoommate;
