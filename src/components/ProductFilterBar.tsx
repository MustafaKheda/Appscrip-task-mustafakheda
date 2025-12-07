// components/ProductFilterBar.tsx
import "../styles/ProductFilterBar.css";
import ArrowIcon from "./ArrowIcon";
import MenuItem from "./MenuItem";

interface Props {
    totalItems: number;
    isFilterOpen: boolean;
    onToggleFilter?: () => void;
}

export default function ProductFilterBar({
    totalItems,
    isFilterOpen,
    onToggleFilter,
}: Props) {
    return (
        <div className="filterbar">
            {/* LEFT */}
            <div className="filterbar-left ">
                <span className="item-count desktop-only ">{totalItems} ITEMS</span>
                <div className="filterbar-middle" onClick={onToggleFilter}>
                    <span className={`bar-arrow desktop-only ${isFilterOpen ? "" : "rotate"}`}>
                        <ArrowIcon />
                    </span>

                    <button className="hide-filter desktop-only">
                        {isFilterOpen ? "SHOW FILTER" : "HIDE FILTER"}
                    </button>


                </div>
            </div>
            {/* MOBILE FILTER BUTTON */}
            <button className="mobile-filter mobile-only" onClick={onToggleFilter}>
                FILTER
            </button>
            {/* RIGHT SORT */}
            <div className="filterbar-right ">
                <MenuItem />
            </div>
        </div>
    );
}
