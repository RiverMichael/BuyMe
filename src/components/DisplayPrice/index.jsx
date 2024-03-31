const DisplayPrice = ({ price, discountedPrice }) => {
  if (!discountedPrice || discountedPrice >= price) {
    return <p className="text-lg font-bold">${price.toFixed(2)}</p>;
  } else if (!price) {
    return <p className="text-lg font-bold">${discountedPrice.toFixed(2)}</p>;
  }

  return (
    <>
      <p className="line-through flex-none">${price.toFixed(2)}</p>
      <p className="text-lg font-bold text-accent">${discountedPrice.toFixed(2)}</p>
    </>
  );
};
export default DisplayPrice;
