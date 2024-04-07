import { Link } from "react-router-dom";
import DisplayDiscountPercent from "../DisplayDiscountPercent";
import DisplayPrice from "../DisplayPrice";
import StarRating from "../StarRating";
import Reviews from "../Reviews";

export default function ProductCard({ product }) {
  return (
    <div className="card card-compact w-80 bg-ghost-white shadow-lg border">
      <figure className="w-full h-60 overflow-hidden rounded-t-box relative">
        <img src={product.image.url} alt={product.title} className="w-full h-full object-cover rounded-t-box" />
        {product.price > product.discountedPrice ? <span className="badge badge-md badge-accent rounded uppercase absolute top-0 right-0 m-3">On Sale</span> : ""}
      </figure>

      <div className="card-body gap-2.5 justify-between">
        <div className="flex flex-col">
          <h2 className="card-title items-start justify-between">
            {product.title}
            <DisplayDiscountPercent price={product.price} discountedPrice={product.discountedPrice} />
          </h2>
          <div className="flex gap-2.5 opacity-60">
            <StarRating rating={product.rating} />
            {product.reviews.length ? <span>|</span> : ""}

            <Reviews id={product.id} reviews={product.reviews} />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-start">
          <DisplayPrice price={product.price} discountedPrice={product.discountedPrice} />
        </div>

        <div className="card-actions justify-center">
          <Link to={`/products/${product.id}`} className="btn btn-sm btn-wide btn-cta">
            View product
          </Link>
        </div>
      </div>
    </div>
  );
}
