import { Link } from "react-router-dom";
import "./style.css";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container mt30">
          <div className="home-item">
            <h1>Github API Challenge</h1>
            <h3>Student - Programmer</h3>
          </div>
          <Link to={`/findprofile`}>
            <div className="btn mt30">Start</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
