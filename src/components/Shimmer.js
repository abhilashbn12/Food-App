import React from 'react';

const multipleShimmer = () => {
    // Use map to create an array of JSX elements
    return Array(12).fill("").map((_, index) => (
        <div key={index} className="ShimmerContainer">
            <div className="ShimmerImage"></div>
            <div className="ShimmerName"></div>
            <div className="ShimmerCuisines"></div>
            <div className="ShimmerRatings"></div>
        </div>
    ));
};
const Shimmer = () => {

    return (
        <div className='Shimmer-list'>
            {multipleShimmer()}
        </div>
    );
};

export default Shimmer;
