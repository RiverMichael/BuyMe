const DisplayDiscountPercent = ({ price, discountedPrice }) => {
  if (discountedPrice < price) {
    const discountPercentage = Math.round(((price - discountedPrice) / price) * 100);
    return <span className="badge badge-sm badge-accent badge-outline flex-none">{discountPercentage}% Discount</span>;
  }
};

export default DisplayDiscountPercent;
