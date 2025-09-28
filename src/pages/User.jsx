import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
          <li>
            <Link to="/user/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default User;
