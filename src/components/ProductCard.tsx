import Image from "next/image";
import "../styles/ProductCard.css";

interface ProductCardProps {
    title: string;
    image: string;
    isNew?: boolean;
    outOfStock?: boolean;
}

export default function ProductCard({
    title,
    image,
    isNew,
    outOfStock,
}: ProductCardProps) {
    return (
        <div className="product-card">

            {/* NEW PRODUCT LABEL */}

            {/* IMAGE AREA */}
            <div className="product-image-wrapper">
                {isNew && <span className="new-label">NEW PRODUCT</span>}
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw,(max-width: 1200px) 50vw, 33vw"
                    className="product-image"
                    loading="lazy"
                />

                {/* OUT OF STOCK BANNER */}
                {outOfStock && (
                    <div className="out-stock-overlay">
                        OUT OF STOCK
                    </div>
                )}
            </div>

            {/* PRODUCT DETAILS */}
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <div className="product-action">
                    <p className="pricing-text">
                        Sign in or Create an account to see pricing
                    </p>
                    <button className="wishlist-btn"> <img src="/icons/heart.svg" alt="Wishlist" style={{
                        width: 16,
                        height: 16,
                    }} />
                    </button>
                </div>


            </div>
        </div>
    );
}
