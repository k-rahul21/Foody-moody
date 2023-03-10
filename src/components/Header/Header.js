// Named Imports
import {Title} from "../Title/Title";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <Title/>
      {/* <SearchBar/> */}
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <Link to="/">
            <li>Contact</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;