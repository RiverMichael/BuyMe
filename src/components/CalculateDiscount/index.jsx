const CalculateDiscount = ({ price, discountedPrice }) => {
  if (discountedPrice < price) {
    const discountPercentage = Math.round(((price - discountedPrice) / price) * 100);
    return <div className="badge badge-accent badge-outline">{discountPercentage}% Discount</div>;
  }
};

export default CalculateDiscount;
