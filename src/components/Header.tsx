"use client";
import { useState } from "react";
import "../styles/Header.css";
import MobileDrawer from "./MobileDrawer";
import ArrowIcon from "./ArrowIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP HEADER */}
      <header className="header">
        {/* LEFT LOGO ICON */}
        <div className="header-left">
          <img
            src="/Icons/menu.svg"
            alt="Menu"
            className="icon mobile-only"
            onClick={() => setMenuOpen(true)}
          />
          <img
            src="/Icons/logo.svg"
            alt="Logo icon"
            className="header-icon-logo"
          />
        </div>

        {/* CENTER LOGO TEXT */}
        <div className="header-center">
          <h1 className="header-title">LOGO</h1>
        </div>

        {/* RIGHT ICONS */}
        <div className="header-right">
          <img src="/Icons/search.svg" alt="Search" className="icon" />
          <img src="/Icons/heart.svg" alt="Wishlist" className="icon" />
          <img src="/Icons/bag.svg" alt="Bag" className="icon " />
          <img src="/Icons/profile.svg" alt="User account" className="icon desktop-only" />

          <div className="lang-selector menu-button desktop-only">
            ENG <span className="menu-arrow"><ArrowIcon /></span>
          </div>
        </div>
      </header>

      {/* NAVIGATION MENU */}
      <nav className="main-nav">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
