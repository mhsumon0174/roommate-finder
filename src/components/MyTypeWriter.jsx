import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const MyTypeWriter = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center bg-amber-300 rounded-2xl p-4 my-10'>
 You Can Use This Website Very Easily. {' '}
                <span className='text-red-700'>
                    <Typewriter words={['Register', 'Login', 'Post', 'Browse','And','Select Your RoomMate','Didnt Get That?','Lets Try Again']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}/>
                </span>
            </h1>
        </div>
    );
};

export default MyTypeWriter;