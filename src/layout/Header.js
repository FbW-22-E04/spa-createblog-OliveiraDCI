import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <main>
      <header>
        <ul>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "link-active header-link" : "link header-link"
            }
          >
            Home
          </NavLink>
          <span>|</span>
          <NavLink
            to="/createpost"
            className={({ isActive }) =>
              isActive ? "link-active header-link" : "link header-link"
            }
          >
            Create Post
          </NavLink>
          <span>|</span>
          <NavLink
            to="/allposts"
            className={({ isActive }) =>
              isActive ? "link-active header-link" : "link header-link"
            }
          >
            All Posts
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </main>
  );
}

export default Header;
