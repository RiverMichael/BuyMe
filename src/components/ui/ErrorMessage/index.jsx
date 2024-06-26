export default function ErrorMessage({ message = "Oooops! Something went wrong, please try again." }) {
  return <div className="text-center text-lg text-error border border-error rounded p-10 my-10 shadow-lg mx-10 sm:mx-auto">{message}</div>;
}
