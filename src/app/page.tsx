import Breadcrumb from "@/components/Breadcrumb";
import ProductList from "@/components/ProductList";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    // Force SSR and fresh data (Next.js 15)
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="page">
      {/* HERO SECTION */}
      <section className="hero">
        <Breadcrumb label="SHOP"/>
        <h1>Discover Our Products</h1>
        <p className="hero-body">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>


      <ProductList totalItems={products.length} products={products} />


    </main>
  );
}
