"use client";

import { useState } from "react";
import ProductFilterBar from "./ProductFilterBar";
import FilterDrawer from "./FilterDrawer";
import ProductCard from "./ProductCard";
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}


export default function ProductList({ totalItems, products }: { totalItems: number, products: Product[] }) {
    const [open, setOpen] = useState(false); // default: open on desktop

    return (
        <>
            {/* Desktop toggle bar */}
            <ProductFilterBar
                totalItems={totalItems}
                isFilterOpen={open}
                onToggleFilter={() => setOpen(!open)}
            />
            <section className="layout-wrapper">
                {/* Drawer content */}
                <FilterDrawer
                    isOpen={open}
                    onClose={() => setOpen(false)}
                />
                <div className="product-grid">
                    {products.map((product, index) => (
                        <ProductCard title={product.title} image={product.image} key={product.id} isNew={index == 0} outOfStock={index === 3} />
                    ))}
                </div>
            </section>
        </>

    );
}
