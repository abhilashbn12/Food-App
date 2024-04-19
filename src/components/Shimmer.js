import React from 'react';

const multipleShimmer = () => {
    // Use map to create an array of JSX elements
    return Array(10).fill("").map((_, index) => (
        <div key={index} className="w-56 p-2 m-2 h-80 bg-white">
            <div className="ShimmerImage h-40 w-52 bg-gray-100 py-2 "></div>
            <div className="ShimmerName bg-gray-100 h-1 w-32 py-4 my-4"></div>
            <div className="ShimmerCuisines  bg-gray-100 h-1 w-52 py-4 my-4"></div>
            <div className="ShimmerRatings  bg-gray-100 h-1 w-16 py-4 my-4"></div>
        </div>
    ));
};
const Shimmer = () => {

    return (
        <div className='flex p-2 m-2 justify-between flex-wrap content-center bg-gray-200'>
            {multipleShimmer()}
        </div>
    );
};

export default Shimmer;
