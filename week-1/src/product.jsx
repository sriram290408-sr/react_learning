import Navbar from "./navbar.jsx";
import ProductCard from "./product-card.jsx";

function Products() {
  const products = [
    { id: 1, name: "Nokia-Phone", price: 2000, stock: true, img: "/assets/nokia.png" },
    { id: 2, name: "Headphone", price: 3000, stock: true, img: "/assets/headphone.png" },
    { id: 3, name: "AirPods", price: 1200, stock: false, img: "/assets/airpods.png" },
    { id: 4, name: "Laptop", price: 120000, stock: true, img: "/assets/laptop.png" }
  ];

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2>Products (Parent & Child Component)</h2>

        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-4" key={item.id}>
              <ProductCard
                name={item.name}
                price={item.price}
                stock={item.stock}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
