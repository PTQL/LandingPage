// Home.js
import React from 'react';
import { useState, useEffect } from 'react';
import { items } from "../constants";
import Navbar from "./Navbar";
import styles from "../style";


const Home = () => {
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
   
    let refreshInterval = setInterval(() => {
      setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
    }, 15000);

    return () => clearInterval(refreshInterval);
  }, [itemActive]);

  const showSlider = (index) => {
    setItemActive(index);
    clearInterval(refreshInterval);
  };

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} absolute top-2.5 w-full z-20`}>
        <div className={`${styles.boxWidth} ${styles.colorText}`}>
          <Navbar />
        </div>
      </div>
      <div className="slider z-15">
        <div className="list">
          {items.map((item, index) => (
            <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
              <img src={item.imgSrc} alt={`Slider ${index + 1}`} />
              <div className="content">
                <p>{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button Arrows */}
        <div className="arrows">
          <button id="prev" onClick={() => setItemActive((prev) => (prev - 1 + items.length) % items.length)}>
            {'<'}
          </button>
          <button id="next" onClick={() => setItemActive((prev) => (prev + 1) % items.length)}>
            {'>'}
          </button>
        </div>

        {/* Thumbnail */}
        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? 'active' : ''}`}
              onClick={() => showSlider(index)}
            >
              <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
              <div className="content">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
</div>
  );
};

export default Home;