import { useParams } from "react-router-dom";
import { products } from "../../components/data/ProductsData";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

export default function DEtails() {
  const slug = useParams();

  const product = products.find((item) => item.slug === slug.slug);

  console.log(product);

  return (
    <div>
      <div className="breadcrumb">
        <div className="breadcrumb-item">
          <Link className="breadcrumb-link" to="/">
            خانه
          </Link>
        </div>
        <FaAngleLeft />
        <div className="breadcrumb-item">
          <Link className="breadcrumb-link" to="/products">
            محصولات
          </Link>
        </div>
        <FaAngleLeft />
        <div className="breadcrumb-item">
          <Link className="breadcrumb-link active" to="/products">
            {" "}
            {product.name}{" "}
          </Link>
        </div>
      </div>

      <div className="details">
        <div className="details-item" key={product.id}>
          <img src={product.img} alt="" />
          <div className="details-item-content">
            <div className="details-item-content-author">
              <span className="author-title">نویسنده :</span>
              <span> {product.author} </span>
            </div>
            <div className="details-item-content-publish">
              <span className="publish-title">تاریخ انتشار :</span>
              <span> {product.publish} </span>
            </div>
            <div className="details-item-content-shorttext">
              <span className="shorttext-title">خلاصه :</span>
              <p>{product.shorttext}</p>
            </div>
            <div className="details-item-content-price">
              <span className="price-title">قیمت : </span>
              <p>
                {product.price} <span>تومان</span>
              </p>
              <button className="add-to-cart">
                افزودن به سبد خرید{" "}
                <span>
                  <SlBasket />
                </span>
              </button>
            </div>
            <div className="details-item-content-stack">
              <span className="stack-title">موجودی : </span>
              <p>
                <span>100</span> عدد
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
