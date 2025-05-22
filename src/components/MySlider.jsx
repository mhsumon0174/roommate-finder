import React from 'react';

const MySlider = () => {
  return (
    <div className="carousel w-full h-[400px] my-20">
      
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/dsPYK0t9/IMG-0522.jpg"
          className="w-11/12 mx-auto h-full z-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold z-1">ছবির উপর লেখা ১</h2>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide4" className="btn btn-circle z-10">❮</a>
          <a href="#slide2" className="btn btn-circle z-10">❯</a>
        </div>
      </div>

      
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/dsPYK0t9/IMG-0522.jpg"
          className=" w-11/12 mx-auto  h-full z-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold z-1">ছবির উপর লেখা ২</h2>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle z-10">❮</a>
          <a href="#slide3" className="btn btn-circle z-10">❯</a>
        </div>
      </div>

      
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/dsPYK0t9/IMG-0522.jpg"
          className="w-11/12 mx-auto  h-full z-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold z-1">ছবির উপর লেখা ৩</h2>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle z-10">❮</a>
          <a href="#slide4" className="btn btn-circle z-10">❯</a>
        </div>
      </div>

      
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/dsPYK0t9/IMG-0522.jpg"
          className="w-11/12 mx-auto  h-full z-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold z-1">ছবির উপর লেখা ৪</h2>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a href="#slide3" className="btn btn-circle z-10">❮</a>
          <a href="#slide1" className="btn btn-circle z-10">❯</a>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
