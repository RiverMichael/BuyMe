import { Link } from "react-router-dom";

export default function Reviews({ id, reviews }) {
  if (reviews.length) {
    return (
      <div>
        <Link to={`/products/${id}#reviews`} className="hover:text-gunmetal-gray underline underline-offset-2 transition-colors duration-300 ease-in-out">
          {reviews.length} {reviews.length > 1 ? "Reviews" : "Review"}
        </Link>
      </div>
    );
  }
}
