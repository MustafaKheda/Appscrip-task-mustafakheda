"use client";

import { useState } from "react";
import Image from "next/image";
import "../styles/Footer.css";
import ArrowIcon from "./ArrowIcon";

export default function Footer() {
    const [open, setOpen] = useState<string | null>(null);

    const toggle = (name: string) => {
        setOpen(open === name ? null : name);
    };

    return (
        <footer className="footer">

            {/* NEWSLETTER */}
            <div className="newsletter">
                <div className="newsletter-left">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p className="desktop-only">
                        Sign up for updates from mettā muse.
                    </p>
                    <p className="mobile-only">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
                    </p>

                    <div className="newsletter-row">
                        <input placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="newsletter-right">
                    <div className="line">
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>

                    <h3 style={{ marginTop: "20px" }}>CURRENCY</h3>
                    <div className="currency-row">
                        <Image src="/images/usa.png" width={30} height={30} alt="usd" />
                        <span>USD</span>
                    </div>
                    <p className="currency-note desktop-only">
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </p>
                </div>
            </div>

            <div className="footer-divider desktop-only"/>

            {/* FOOTER COLUMNS / MOBILE ACCORDION */}
            <div className="footer-columns">

                {/* ==== COLUMN 1 / ACCORDION ==== */}
                <div className="footer-col">

                    {/* Desktop title */}
                    <h3 className="desktop-title">mettā muse</h3>

                    {/* Mobile accordion header */}
                    <div className="mobile-header" onClick={() => toggle("about")}>
                        <span>mettā muse</span>
                        <span className={`arrow ${open === "about" ? "open" : ""}`}><ArrowIcon /></span>
                    </div>

                    {/* Desktop always open, Mobile accordion */}
                    <ul className={`footer-links ${open === "about" ? "open" : ""}`}>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>

                {/* ==== COLUMN 2 / ACCORDION ==== */}
                <div className="footer-col">
                    <h3 className="desktop-title">QUICK LINKS</h3>
                    <div className="mobile-header" onClick={() => toggle("quick")}>
                        <span>QUICK LINKS</span>
                        <span className={`arrow ${open === "quick" ? "open" : ""}`}><ArrowIcon /></span>
                    </div>

                    <ul className={`footer-links ${open === "quick" ? "open" : ""}`}>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* ==== COLUMN 3 / ACCORDION ==== */}
                <div className="footer-col">
                    <h3 className="desktop-title">FOLLOW US</h3>
                    <div className="mobile-header" onClick={() => toggle("follow")}>
                        <span>FOLLOW US</span>
                        <span className={`arrow ${open === "follow" ? "open" : ""}`}><ArrowIcon /> </span>
                    </div>

                    <div className={`footer-links social-links ${open === "follow" ? "open" : ""}`}>
                        <div className="social-icons">
                            <Image src="/images/Instagram.png" width={26} height={26} alt="instagram" />
                            <Image src="/images/linkedin.png" width={26} height={26} alt="linkedin" />
                        </div>
                    </div>
                    <div className="payment-section desktop-only">
                        <h3>mettā muse ACCEPTS</h3>

                        <div className="payment-row">
                            <Image src="/images/gpay.png" width={60} height={34} alt="gpay" />
                            <Image src="/images/mastercard.png" width={60} height={34} alt="mastercard" />
                            <Image src="/images/paypal.png" width={60} height={34} alt="paypal" />
                            <Image src="/images/amex.png" width={60} height={34} alt="amex" />
                            <Image src="/images/applepay.png" width={60} height={34} alt="applepay" />
                            <Image src="/images/pay.png" width={60} height={34} alt="opay" />
                        </div>
                    </div>
                </div>


            </div>

            {/* PAYMENT BOX */}
            <div className="payment-section mobile-only">
                <h3>mettā muse ACCEPTS</h3>

                <div className="payment-row">
                    <Image src="/images/gpay.png" width={50 } height={34} alt="gpay" />
                    <Image src="/images/mastercard.png" width={50} height={34} alt="mastercard" />
                    <Image src="/images/paypal.png" width={50} height={34} alt="paypal" />
                    <Image src="/images/amex.png" width={50} height={34} alt="amex" />
                    <Image src="/images/applepay.png" width={50} height={34} alt="applepay" />
                    <Image src="/images/pay.png" width={50} height={34} alt="opay" />
                </div>
            </div>

            <p className="copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </p>

        </footer>
    );
}
