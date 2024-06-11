import "./style.css";
import { UserDTO } from "../../models/user";


type Props = {
  user: UserDTO;
};

export default function DisplayUserProfile({ user }: Props) {
 
  return (
    <main>
      <section>
        <nav className="navbar-content">
          <div className="profile-img">
            <img src={user?.avatar_url} alt="profile" />
          </div>
          <div className="nav-content-item">
            <div className="menu">Informations</div>
            <div className="menu-item">Profile: {user?.url}</div>
            <div className="menu-item">Follwers: {user?.followers}</div>
            <div className="menu-item">Location: {user?.location}</div>
            <div className="menu-item">Name: {user?.name}</div>
          </div>
        </nav>
      </section>
    </main>
  );
}
