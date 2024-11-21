import { categories, products } from "../components/data/ProductsData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { types } from "../components/data/ProductsData";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <React.Fragment>
      <div className="products-container">
        <div className="categories">
          <div className="categories-head">دسته بندی ها</div>
          <div className="categories-content">
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
              {categories
                .map((item) => (
                  <SwiperSlide>
                    <Link to={`/products/categories/${item.slug}`} className="categories-content-item" key={item.id}>
                      <img src={"/imgs/1.jpg"} alt="" />
                      <div className="categories-content-item-content">
                        <h5>{item.name}</h5>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="products">
          <div className="products-head">
            <h4>محصولات</h4>
          </div>
          <div className="products-content">
            {products.map((item) => (
              <Link to={`/product/${item.slug}`} className="products-content-item" key={item.id}>
                <img src={"/imgs/1.jpg"} alt="" />
                <div className="products-content-item-content">
                  <div className="products-content-item-content-title">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="products-content-item-content-price">
                    <span>{item.price} تومان</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
