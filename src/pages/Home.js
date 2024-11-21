import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { products } from "../components/data/ProductsData";

function Home() {
  console.log(products);
  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          dir="rtl"
          navigation={true}
          rewind={true}
          className="myslider"
        >
          <SwiperSlide>
            <img src="/imgs/slider/1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/slider/2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/slider/3.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cat">
        <div className="cat-head">
          <h4>دسته بندی ها</h4>
          <Link to="/products" className="">
            بیشتر
          </Link>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          dir="rtl"
          navigation={true}
          rewind={true}
          modules={[Navigation]}
          className="mycat"
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((item) => (
            <SwiperSlide>
              <Link to={`/product/${item.slug}`} className="cat-item">
                <img src={item.img} alt="" />
                <span> {item.name} </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Home;
