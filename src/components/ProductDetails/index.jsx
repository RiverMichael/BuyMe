import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import { API_BASE_URL } from "../../shared/api";
import { Link } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingIndicator from "../ui/LoadingIndicator";

export default function ProductDetails() {
  const id = useParams().id;

  const { data, isError, isLoading } = useFetch(API_BASE_URL + id);
  const product = data.data;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (product) {
    return (
      <div className="flex flex-col gap-y-10">
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

        <h2 className="text-center">{product.title}</h2>

        <div className="flex flex-wrap">
          <figure className="basis-full md:basis-6/12 border border-error">
            <img src={product.image.url} alt={product.image.alt} className="w-full " />
          </figure>
          <div className="basis-full md:basis-6/12 p-5 lg:p-0 lg:ps-20 border border-warning">
            <p>dfdsfd</p>
            <p>dfdsfd</p>
            <p>dfdsfd</p>
            <p>dfdsfd</p>
          </div>
        </div>
      </div>
    );
  }
}
