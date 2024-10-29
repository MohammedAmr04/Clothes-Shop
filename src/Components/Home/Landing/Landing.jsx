import React, { useEffect } from 'react';
import './Landing.css';
import { FONT, THEME_COLORS } from '../../../Variables';


export default function Landing() {

  const images = [
    '/images/slider/1.jpg',
    '/images/slider/2.jpg',
    '/images/slider/3.jpg',
    '/images/slider/4.jpg',
    '/images/slider/5.jpg'  ];

  let index = 0;

  function changeImg() {
    const elements = document.querySelectorAll('.landing img');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i]) {
        elements[i].src = images[index];
        index = (index + 1) % images.length; // Loop back to the first image after the last one
      }
    }
  }

  function stopAnimation() {
    const currentWidth = window.innerWidth; // Get the viewport width
    console.log(currentWidth);
    const fig = document.querySelector('.landing figure');
    const headLanding = document.querySelector('.landing h2');

    if (currentWidth <= 600) {
      fig.classList.remove(['move-t-t-b']); 
      fig.classList.add(['flex-column']); 
      headLanding.classList.remove('move-t-t-b'); 
    } else {
      fig.classList.add('move-t-t-b');
      headLanding.classList.add('move-t-t-b'); 
    }
  }
  window.addEventListener('resize', stopAnimation);

  useEffect(() => {
    const change = setInterval(changeImg, 3000);
    stopAnimation();
    return () => {
      clearInterval(change);
    } // Clear interval on component unmount
  }, []);


  return (
    <div className="landing overflow-hidden position-relative pt-5 pb-5">
      <div className="container pt-5 pb-5 position-absolute top-30 start-50 translate-middle ">
        
        <figure className="figure pt-5 d-flex justify-content-between position-absolute move-t-t-b w-100">

          <img
            src={images[0]} // Initial image source
            className="figure-img img-fluid rounded "
            alt="..."
            width={'30%'}
          />

          <img
            src={images[1]} // Initial image source
            className="figure-img img-fluid rounded"
            alt="..."
            width={'30%'}

          />
          <img
            src={images[2]} // Initial image source
            className="figure-img img-fluid rounded"
            alt="..."
            width={'30%'}

          />

        </figure>
        <h2 className='position-absolute pt-5 pb-5 move-t-t-b bottom-100 start-50 translate-middle' style={{ color: THEME_COLORS.secondary, fontFamily: FONT }}>New Products</h2>
      
      </div>
    </div>
  );
}
