"use client";
import "../styles/Drawer.css";

export default function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <aside className={`drawer ${open ? "open" : ""}`}>
        <div className="menu-drawer-header">
          <span className="drawer-title">Menu</span>
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="drawer-links">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
          <a href="#">PROFILE</a>
        </nav>

        <div className="drawer-section">
          <span className="drawer-lang">ENG ▼</span>
        </div>
      </aside>

      {/* DARK BACKDROP */}
      {open && <div className="backdrop" onClick={onClose}></div>}
    </>
  );
}