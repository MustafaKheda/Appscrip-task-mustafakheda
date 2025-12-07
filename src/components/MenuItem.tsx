"use client";

import { useState } from "react";
import "../styles/MenuItem.css";
import ArrowIcon from "./ArrowIcon";

export default function MenuItem() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Recommended");

    const options = [
        "Recommended",
        "Newest First",
        "Price: Low to High",
        "Price: High to Low"
    ];

    const handleSelect = (value: string) => {
        setSelected(value);   // Change label
        setOpen(false);       // Close dropdown
    };

    return (
        <div className="menu-item-wrapper">
            <span className="menu-button" onClick={() => setOpen(!open)}>
                {selected}
                <span className={`menu-arrow ${open ? "open" : ""}`}><ArrowIcon /></span>
            </span>

            {open && (
                <div className="menu-dropdown">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            className={`dropdown-item ${opt === selected ? "active" : ""}`}
                            onClick={() => handleSelect(opt)}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
