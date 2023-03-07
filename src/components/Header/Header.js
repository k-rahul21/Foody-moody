// Named Imports
import {Title} from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <Title/>
      {/* <SearchBar/> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;