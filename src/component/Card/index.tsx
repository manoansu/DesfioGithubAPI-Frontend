import { Outlet } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import UserProfile from "../../routes/Home/UserProfile";

type InputFormData = {
  userLogin: string;
};

export default function Card() {
  const [user, setUser] = useState<string>();

  const [inputFormData, seInputFormData] = useState<InputFormData>({
    userLogin: "",
  });

  /*function handleInputForm(event: any) {
    const inputName = event.target.value;
    const inputValue = event.target.value;
    seInputFormData({ ...inputFormData, [inputName]: inputValue });
  }*/

  function handleInputForm(event: any) {
    seInputFormData({ ...inputFormData, userLogin: event.target.value });
  }

  function handleUserLogin(event: any) {
    event.preventDefault();
    setUser(inputFormData.userLogin);
  }
  
  return (
    <main>
      <section>
        <nav className="navbar container mt30">
          <form onSubmit={handleUserLogin}>
            <div className="nav-item">
              <h3>Find Github profile</h3>

              <input
                name="userLogin"
                value={inputFormData.userLogin}
                type="text"
                placeholder="Github user"
                onChange={handleInputForm}
              />
            </div>
            <div className="btn-card">
              <button type="submit">Find</button>
            </div>
          </form>
          {
          user ?
          <>
          <UserProfile userName={user!} />
          <Outlet />
          </>
          :
          ''
        }
        </nav>
      </section>
    </main>
  );
}
