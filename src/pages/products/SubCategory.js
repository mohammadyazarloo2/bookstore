import { useParams } from "react-router-dom";
import {
  categories,
  products,
  subcat,
} from "../../components/data/ProductsData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function SubCategory() {
  const slug = useParams();

  const cats = subcat.find((item) => item.slug === slug.subcat);

  const filter = categories.find((item) => item.slug === slug.cat);
  if (filter === undefined) {
    return (
      <div className="notfoundcat">
        <h1>دسته بندی مورد نظر یافت نشد</h1>
      </div>
    );
  }
  console.log(filter);

  const id = cats.id;
  console.log(products.filter((item) => item.subcategory === id));

  const filteredProducts = products.filter((item) => item.subcategory === id);

  return (
    <React.Fragment>
      <div className="products-container">
        <div className="products">
          <div className="products-head">
            <h4>محصولات</h4>
          </div>
          <div className="products-content">
            {filteredProducts.map((item) => (
              <Link
                to={`/product/${item.slug}`}
                className="products-content-item"
                key={item.id}
              >
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
