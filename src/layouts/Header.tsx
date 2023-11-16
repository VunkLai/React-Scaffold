import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="text-xl btn btn-ghost">
          Workaround
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
