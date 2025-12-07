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
    cache: "no-store",
    next: { revalidate: 0 },
  });

  // Handle API failure (HTML returned instead of JSON)
  if (!res.ok) {
    const errorText = await res.text(); // This will show the HTML returned
    console.error("FakeStore API ERROR:", errorText);
    return []; // return empty array instead of crashing SSR
  }

  try {
    return await res.json();
  } catch (e) {
    console.error("JSON PARSE ERROR:", e);
    return [];
  }
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
