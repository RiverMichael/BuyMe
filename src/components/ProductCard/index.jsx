import { Link } from "react-router-dom";
import CalculateDiscount from "../CalculateDiscount";
import DisplayPrice from "../DisplayPrice";
import StarRating from "../StarRating";
import Reviews from "../Reviews";

export default function ProductCard({ product }) {
  return (
    <div className="card card-compact w-96 bg-ghost-white shadow-lg ms-5">
      <img src={product.image.url} alt={product.image.alt} className="rounded-t-box" />

      <div className="card-body gap-2.5">
        <div className="flex flex-col">
          <h2 className="card-title items-start">
            {product.title}
            <CalculateDiscount price={product.price} discountedPrice={product.discountedPrice} />
          </h2>
          <div className="flex gap-2.5 text-dark-gray">
            <StarRating rating={product.rating} />
            <span>|</span>
            <Reviews id={product.id} reviews={product.reviews} />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-start">
          <DisplayPrice price={product.price} discountedPrice={product.discountedPrice} />
        </div>

        <div className="card-actions justify-center">
          <Link to={`/products/${product.id}`} className="btn btn-sm btn-wide bg-gunmetal-gray text-ghost-white hover:border-gunmetal-gray hover:text-gunmetal-gray">
            View product
          </Link>
        </div>
      </div>
    </div>
  );
}
