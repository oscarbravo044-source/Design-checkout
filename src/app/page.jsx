import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Product Store</h1>

      <ProductCard title="Cool Shirt" price={1999} image="/product1.png" />
      <ProductCard title="Nice Hat" price={999} image="/product2.png" />
    </main>
  );
}