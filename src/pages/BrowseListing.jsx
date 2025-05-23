import { use } from 'react';
import { useLoaderData } from "react-router";
import { AuthContext } from '../contexts/AuthContext';
import AllRoommate from "../components/AllRoommate";
import Loading from '../components/Loading';
const BrowseListing = () => {
  const roommates = useLoaderData();
  const {loading}=use(AuthContext)
  if(loading){
    return <Loading></Loading>
}

  return (
    <div className="my-20">
      <h1 className="font-bold text-3xl text-center mb-10">
        All Available Post For You
      </h1>

      <div className="flex w-11/12 mx-auto ">
        <table className="w-full text-center border shadow-md rounded-lg">
          <thead className="bg-gray-100  text-gray-700 h-10 ">
            <tr className='border h-15'>
              <th className='border'>Photo</th>
              <th className='border'>Name</th>
              <th className='border'>Amount Limit</th>
              <th className='border'>Room Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {roommates.map((single, index) => (
              <AllRoommate key={index} single={single} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListing;
