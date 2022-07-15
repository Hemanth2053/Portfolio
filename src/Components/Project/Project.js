import React from 'react'
import './Project.css'
import Cosmetics from '../../Sec-asset/cosmetic.jpg'
import Furniture from '../../Sec-asset/furniture.jpg'
import Education from '../../Sec-asset/education-2.jpg'
import Fashion from '../../Sec-asset/fashion.jpg'


const Project = () => {
  return (
    <section id="project">
      <h2 className="project-cont">Projects</h2>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators mb-1">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner text-center">
    <div class="carousel-item active">
      <img src={Cosmetics} class="d-block w-100  " alt="bg1" />
      <div class="carousel-caption h-40  d-md-block align-item-center justify-content-center">
        <h3>Vijay Impex</h3>
        <a href="https://vijayimpex.co.in/" target="_blank" className="btn">Link here</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Furniture} class="d-block w-100 " alt="bg4" />
      <div class="carousel-caption h-40 d-md-block align-item-center justify-content-center">
        <h3>Rani Arts and Teaks</h3>
        <a href="https://raniartsandteak.co.in/" target="_blank" className="btn">Link here</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Education} class="d-block w-100 " alt="bg3" />
      <div class="carousel-caption h-40 d-md-block align-item-center justify-content-center">
        <h3>Home Tutors & Online Tutors</h3>
        <a href="https://hometutorsite.com/" target="_blank" className="btn">Link here</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Fashion} class="d-block w-100 " alt="bg6" />
      <div class="carousel-caption h-40 d-md-block align-item-center justify-content-center">
        <h3>Ramii's Fashions</h3>
        <a href="https://ramiisfashions.co.in/" target="_blank" className="btn">Link here</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
  )
}

export default Project