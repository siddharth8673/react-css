import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import "../../styles/testimonial.css"


const Testmonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...setting}>
      <div className="testimonial py-4 px-3">
        <p className="section__descriptin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          ut dolorum sint. Impedit, voluptas sint aspernatur laboriosam culpa
          nemo aliquam iste ducimus hic cum, cupiditate qui nisi pariatur
          exercitationem cumque natus reprehenderit, accusamus quae perferendis
          quo quia assumenda mollitia! At odio nobis rerum quidem, id nesciunt
          iste tempora ullam? Quo?
        </p>
        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__descriptin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          ut dolorum sint. Impedit, voluptas sint aspernatur laboriosam culpa
          nemo aliquam iste ducimus hic cum, cupiditate qui nisi pariatur
          exercitationem cumque natus reprehenderit, accusamus quae perferendis
          quo quia assumenda mollitia! At odio nobis rerum quidem, id nesciunt
          iste tempora ullam? Quo?
        </p>
        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__descriptin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          ut dolorum sint. Impedit, voluptas sint aspernatur laboriosam culpa
          nemo aliquam iste ducimus hic cum, cupiditate qui nisi pariatur
          exercitationem cumque natus reprehenderit, accusamus quae perferendis
          quo quia assumenda mollitia! At odio nobis rerum quidem, id nesciunt
          iste tempora ullam? Quo?
        </p>
        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__descriptin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          ut dolorum sint. Impedit, voluptas sint aspernatur laboriosam culpa
          nemo aliquam iste ducimus hic cum, cupiditate qui nisi pariatur
          exercitationem cumque natus reprehenderit, accusamus quae perferendis
          quo quia assumenda mollitia! At odio nobis rerum quidem, id nesciunt
          iste tempora ullam? Quo?
        </p>
        <div className="mt-3 d-flex align-content-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testmonial;
