import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const userFirstName = user?.displayName.split(" ");

  const handleLogout = () => {
    logout()
      .then(toast.success("Logged Out Successfully!"))
      .catch((error) => toast.error(error.message));
  };
  const navigationLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allevents">All Events</NavLink>
      </li>
      <li>
        <NavLink to="/career">Join Our Team</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-gray-50 shadow-xl">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold "
              >
                {navigationLinks}
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl px-0 sm:px-4" to="/">
              CAREER⚡FAIR
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              {navigationLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <p className="font-medium">{userFirstName[0]}</p>
                <div className="avatar">
                  <div className="w-14 mask mask-squircle mx-3">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn bg-transparent border-black rounded-none text-base"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="avatar">
                  <div className="w-14 mask mask-squircle mr-3">
                    <img src="https://i.ibb.co/jG76Kd8/user.png" />
                  </div>
                </div>
                <Link to="/login">
                  <button className="btn bg-transparent border-black rounded-none text-base">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
