import { Link } from "react-router-dom";

export default function Reviews({ id, reviews }) {
  return (
    <div>
      <Link to={`/products/${id}#reviews`} className="hover:text-gunmetal-gray underline underline-offset-2 transition-colors duration-300 ease-in-out">
        {reviews.length} Reviews
      </Link>
    </div>
  );
}
