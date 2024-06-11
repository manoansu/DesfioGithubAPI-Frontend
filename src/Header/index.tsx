import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="site-name container">
        <Link to={`/`}>Github API</Link>
      </div>
    </header>
  );
}
