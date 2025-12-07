"use client";
import { useState } from "react";
import "../styles/FilterDrawer.css";
import ArrowIcon from "./ArrowIcon";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function FilterDrawer({ isOpen, onClose }: Props) {
    const [openSection, setOpenSection] = useState<string | null>("ideal");

    const toggleSection = (name: string) => {
        setOpenSection(openSection === name ? null : name);
    };

    return (

        <aside className={`filter-drawer  ${isOpen ? "open" : ""}`}>

            {/* CLOSE BUTTON */}

            <div className="menu-drawer-header">
                <span className="drawer-title mobile-only">Filter</span>
                <button className="drawer-close mobile-only " onClick={onClose}>
                    ✕
                </button>
            </div>

            <div className="filter-content">


                {/* CUSTOMIZABLE */}
                <div className="filter-section desktop-only">
                    <label className="checkbox-row">
                        <input type="checkbox" />
                        <span>CUSTOMIZBLE</span>
                    </label>
                </div>

                <div className="filter-divider" /> 

                {/* REUSABLE TEMPLATE FOR OTHER SECTIONS */}
                {[
                    "IDEAL FOR",
                    "OCCASION",
                    "WORK",
                    "FABRIC",
                    "SEGMENT",
                    "SUITABLE FOR",
                    "RAW MATERIALS",
                    "PATTERN",

                ].map((name) => (
                    <div className="filter-section" key={name}>
                        <div
                            className="section-header"
                            onClick={() => toggleSection(name)}
                        >
                            <span>{name}</span>
                            <span
                                className={`arrow ${openSection === name ? "open" : ""}`}
                            >                           <ArrowIcon />
                            </span>
                        </div>


                        <div className="section-body">
                            <p className="all-tag">All</p>
                            {openSection === name && (
                                <>
                                    <button className="unselect">Unselect all</button>
                                    <label className="checkbox-row">
                                        <input type="checkbox" />
                                        <span>Men</span>
                                    </label>

                                    <label className="checkbox-row">
                                        <input type="checkbox" />
                                        <span>Women</span>
                                    </label>

                                    <label className="checkbox-row">
                                        <input type="checkbox" />
                                        <span>Baby & Kids</span>
                                    </label>
                                </>

                            )}
                        </div>
                        <div className="filter-divider" />
                    </div>
                ))}
            </div>
        </aside>

    );
}
