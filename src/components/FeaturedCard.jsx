import React from 'react';

const FeaturedCard = ({single}) => {
    console.log(single);
    
    return (
        <div>
             <div className="card card-side border shadow-sm">
          <figure>
            <img
              src={single.photo}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default FeaturedCard;