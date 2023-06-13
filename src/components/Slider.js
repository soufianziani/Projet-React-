import React from 'react'
import "./Slider.css"
const Slider = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide  "  data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner"  >
        <div className="carousel-item active" data-bs-interval="1000">
          <img src="/img/img.jpg" class="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
         
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/img/img2.jpg" class="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="/img/img3.jpg" class="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="mb-5"></div>
    </div>
  )
}

export default Slider