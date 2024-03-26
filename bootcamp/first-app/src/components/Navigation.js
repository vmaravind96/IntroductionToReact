//import Link from react-dom-router
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clock">Clock</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/welcome/:name">Welcome</Link>
      </li>
    </ul>
  );
}

export default Navigation;