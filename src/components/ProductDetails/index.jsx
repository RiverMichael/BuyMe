import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import { API_BASE_URL } from "../../shared/api";
import { Link } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingIndicator from "../ui/LoadingIndicator";
import StarRating from "../StarRating";
import Reviews from "../Reviews";
import DisplayPrice from "../DisplayPrice";
import CalculateDiscount from "../CalculateDiscount";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productStore from "../store/products";

export default function ProductDetails() {
  const id = useParams().id;
  const { data, isError, isLoading } = useFetch(API_BASE_URL + id);
  const product = data.data;
  const { addToCart } = productStore();
  const [showToast, setShowToast] = useState(false);

  function handleAddToCartClick() {
    addToCart(product);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  // Scrolls down to #reviews section when clicking the reviews link
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(!isLoading && data !== undefined);
  }, [isLoading, data]);

  useEffect(() => {
    if (isDataLoaded) {
      const checkHashAndScroll = () => {
        const hash = location.hash;
        if (hash) {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      checkHashAndScroll();
    }
  }, [location, location.hash, isDataLoaded]);
  //

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (product) {
    return (
      <div className="flex flex-col gap-y-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/" className="underline-offset-2">
                All Products
              </Link>
            </li>
            {product.tags ? <li className="capitalize">{product.tags[0]}</li> : ""}
            <li className="text-dark-gray">{product.title}</li>
          </ul>
        </div>

        <section className="flex flex-wrap">
          <figure className="basis-full md:basis-6/12 relative">
            <img src={product.image.url} alt={product.image.alt} className="w-full shadow-lg rounded-box" />
            {product.price > product.discountedPrice ? <span className="badge badge-md badge-accent rounded uppercase absolute top-0 right-0 m-3">On Sale</span> : ""}
          </figure>

          <div className="basis-full md:basis-6/12 py-5 md:py-0 md:px-10 lg:px-20 flex flex-col gap-y-10">
            <div>
              <h1 className="text-3xl">{product.title}</h1>
              <div className="flex gap-2.5 text-dark-gray">
                <StarRating rating={product.rating} />
                {product.reviews.length ? <span>|</span> : ""}
                <Reviews id={product.id} reviews={product.reviews} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start">
                <div className="flex flex-col-reverse">
                  <DisplayPrice price={product.price} discountedPrice={product.discountedPrice} />
                </div>
                <CalculateDiscount price={product.price} discountedPrice={product.discountedPrice} />
              </div>
              <button onClick={handleAddToCartClick} className="btn btn-sm btn-wide bg-gunmetal-gray text-ghost-white hover:border-gunmetal-gray hover:text-gunmetal-gray">
                Add to cart
              </button>
            </div>

            <article>
              <h2 className="text-base">Description</h2>
              <p>{product.description}</p>
            </article>
          </div>
        </section>

        <section id="reviews" className="flex flex-col gap-2">
          <h3 className="text-2xl">Reviews</h3>

          <div className="flex flex-col">
            {product.reviews.map((review) => {
              return (
                <div key={review.id} className="border-t flex flex-col">
                  <div className="flex gap-5">
                    <h4 className="text-base">{review.username}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                  <p>{review.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div id="addToCartToast" className={`toast toast-top toast-end z-10 ${showToast ? "" : "hidden"}`}>
          <div className="alert bg-snow-mist whitespace-normal">
            <span>
              You added <span className="text-base font-bold">{product.title}</span> to you shopping cart.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
