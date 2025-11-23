"use client";
import "../styles/productCard.css";

export default function ProductCard({ title, price, image }) {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h2>{title}</h2>
      <p>${(price / 100).toFixed(2)}</p>
      <button onClick={handleCheckout}>Buy Now</button>
    </div>
  );
}