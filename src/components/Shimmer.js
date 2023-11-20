import React from 'react';

const Shimmer = () => {
    const multipleShimmer = () => {
        // Use map to create an array of JSX elements
        return Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="ShimmerContainer">
                <div className="ShimmerImage"></div>
                <div className="ShimmerName"></div>
                <div className="ShimmerCuisines"></div>
                <div className="ShimmerRatings"></div>
            </div>
        ));
    };

    return (
        <div style={{ display: 'flex', flex: "wrap" }}>
            {multipleShimmer()}
        </div>
    );
};

export default Shimmer;
