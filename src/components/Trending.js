import React from 'react'
import TrendingItems from './TrendingItems';

export const Trending = () => {

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Trending Now</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              left
            </button>
            <button title="scroll right" onClick={slideRight}>
              right
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItems />
        </div>
      </div>
    </div>
  )
}
