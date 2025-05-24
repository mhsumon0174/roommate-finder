import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ExtraSectionOne = () => {
  return (
    <div className="bg-blue-50 py-10 px-6 md:px-16 rounded-lg shadow-md my-12">
      <h2 className=" md:text-3xl text-xl flex md:justify-center  items-center md:gap-3 font-bold text-center text-blue-900 mb-4">
        <AiFillSafetyCertificate />
        Safety Tips for Roommates
      </h2>
      <p className="text-center opacity-70 text-gray-700 mb-8">
        Stay safe and build trust with your future roommate by following these tips.
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full ">
        <div className="flex-1 space-y-6 text-gray-800 text-lg">
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">No early payments:</h1>
            <p>Don't send money before meeting or verifying them.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Meet publicly first:</h1>
            <p>Don't meet at home first time—use a cafe or park.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Check ID & background:</h1>
            <p>Don't trust without verifying ID or online presence.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Set rules early:</h1>
            <p>Don't skip talking about rent, chores, and boundaries.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Use agreements:</h1>
            <p>Don't rely only on verbal deals—write it down.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Keep info private:</h1>
            <p>Don't share passwords or bank details.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <h1 className="font-semibold min-w-[200px]">Tell someone:</h1>
            <p>Don't meet without informing a friend or family.</p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
            <img className="h-90 " src="https://i.ibb.co/1JTz1m6W/207467017-a2902b93-ebf3-44f7-b97b-c360e0c5198b.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
