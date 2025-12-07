import Breadcrumb from "@/components/Breadcrumb";
import ProductList from "@/components/ProductList";
import products from "../../public/data/products.json";
import Head from "next/head";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Discover Our Products | Metta Muse",
  "description": "Explore sustainable products including bags, cloths, and accessories.",
  "url": "https://appscrip-task-mustafakheda.vercel.app/",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://appscrip-task-mustafakheda.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": "https://appscrip-task-mustafakheda.vercel.app/"
      }
    ]
  }
};
export default async function Home() {
  return (
    <>
      <Head>
        <title>Discover Our Products | Metta Muse</title>
        <meta name="description" content="Explore sustainable products including bags, cloths, and accessories." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <main className="page">
        {/* HERO SECTION */}
        <section className="hero">
          <Breadcrumb label="SHOP" />
          <h1>Discover Our Products</h1>
          <p className="hero-body">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>


        <ProductList totalItems={products.length} products={products} />


      </main>
    </>
  );
}
