import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <Link to="/">
      <h1 className="title border-box">  Foody Moody</h1>
      </Link>
      <p className="copy-right border-box">&#169; 2023</p>
      <p className="origin border-box">India</p>
    </div>
  )
}

export default Footer;