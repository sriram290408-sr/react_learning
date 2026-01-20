function ProductCard({ name, price, stock, img }) {
  return (
    <div className="card shadow-sm mb-4">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ₹{price}</p>
        {stock ? (
          <span className="badge bg-success">Available</span>
        ) : (
          <span className="badge bg-danger">Not Available</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
