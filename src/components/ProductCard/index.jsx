import { Link } from "react-router-dom";
import CalculateDiscount from "../CalculateDiscount";
import DisplayPrice from "../DisplayPrice";
import StarRating from "../StarRating";

export default function ProductCard({ product }) {
  return (
    <div className="card card-compact w-96 bg-ghost-white shadow-lg ms-5">
      <img src={product.image.url} alt={product.image.alt} className="rounded-t-box" />

      <div className="card-body">
        <div className="flex flex-col">
          <h2 className="card-title items-start">
            {product.title}
            <CalculateDiscount price={product.price} discountedPrice={product.discountedPrice} />
          </h2>
          <StarRating rating={product.rating} />
        </div>

        <div className="flex gap-2 items-center justify-start">
          <DisplayPrice price={product.price} discountedPrice={product.discountedPrice} />
        </div>

        <div className="card-actions justify-end">
          <Link to={`/products/${product.id}`} className="btn btn-sm bg-gunmetal-gray text-ghost-white hover:border-gunmetal-gray hover:text-gunmetal-gray">
            View product
          </Link>
        </div>
      </div>
    </div>
  );
}
