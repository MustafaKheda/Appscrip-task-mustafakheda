import "../styles/Breadcrumb.css";

export default function Breadcrumb({label}:{label:string}) {
  return (
    <nav className="breadcrumb mobile-only">
      <a className="crumb light" href="#">HOME</a>
      <span className="crumb-separator">|</span>
      <span className="crumb dark">{label}</span>
    </nav>
  );
}