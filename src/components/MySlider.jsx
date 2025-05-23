import React from 'react';

const MySlider = () => {
  return (
    <div className="carousel w-full h-[400px] my-10 rounded-lg overflow-hidden">
      <div id="slide1" className=" carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/84D65Fy0/2148143135.jpg"
          className="w-11/12 mx-auto h-full object-cover opacity-60 z-1 "
        
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className='z-1'>
            <h2 className="text-white text-4xl font-bold mb-2">Find Your Perfect Roommate</h2>
            <p className="text-white text-lg">Easily connect with people looking for roommates near your location.</p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/HDYsPTx1/354891912-2bd9809b-b7cd-4b36-a31c-5bd74aed264f.jpg"
          className=" h-full object-cover object-top opacity-50 z-1 w-11/12 mx-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className='z-1'>
            <h2 className="text-white text-4xl font-bold mb-2">Post Ads for Free</h2>
            <p className="text-white text-lg">List your empty room or search for one without any cost.</p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/gFWGKjcf/2150041862.jpg"
          className="w-11/12 mx-auto opacity-50 h-full object-cover z-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className='z-1'>
            <h2 className="text-white text-4xl font-bold mb-2">Safe & Trusted Community</h2>
            <p className="text-white text-lg">Connect with verified users and enjoy secure roommate finding experience.</p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
