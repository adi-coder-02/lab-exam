import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Carousel>
        <div><img src="C:\\Users\\adity\\Desktop\\nature2.jpg" alt="Image 1" /></div>
        <div><img src="C:\\Users\\adity\\Desktop\\nature3.jpg" alt="Image 2" /></div>
        <div><img src="C:\\Users\\adity\\Desktop\\nature4.jpg" alt="Image 3" /></div>
        <div><img src="C:\\Users\\adity\\Desktop\\nature1.jpg" alt="Image 4" /></div>
      </Carousel>
    </div>
  );
}

export default Home;
