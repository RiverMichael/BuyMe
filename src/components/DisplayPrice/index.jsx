const DisplayPrice = ({ price, discountedPrice }) => {
  if (!discountedPrice || discountedPrice >= price) {
    return <p className="text-lg font-bold">${price}</p>;
  } else if (!price) {
    return <p className="text-lg font-bold">${discountedPrice}</p>;
  }

  return (
    <>
      <p className="line-through flex-none">${price}</p>
      <p className="text-lg font-bold text-accent">${discountedPrice}</p>
    </>
  );
};
export default DisplayPrice;
