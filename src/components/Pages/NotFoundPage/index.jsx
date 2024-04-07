import { Link } from "react-router-dom";
import useUpdateHead from "../../Hooks/useUpdateHead";

export default function NotFoundPage() {
  useUpdateHead("404 - Page not found", "This page is unfortunately not fount at BuyMe");

  return (
    <main className="mt-10 mb-20 mx-auto px-5">
      <div className="p-8 md:p-12 border-2 border-error rounded shadow-md text-center flex flex-col gap-5">
        <h1 className="text-error">404 - Page not found</h1>
        <p className="text-error">Oooops! We can not seem to find this page.</p>

        <Link to="/" className="underline underline-offset-2 hover:opacity-60">
          Go to the home page
        </Link>
      </div>
    </main>
  );
}
