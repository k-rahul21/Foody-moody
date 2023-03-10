import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <Link to="/">
      <p className="title border-box">About Foody Moody</p>
      </Link>
      <p className="copy-right border-box">&#169; 2023</p>
      <p className="origin border-box">India</p>
    </div>
  )
}

export default Footer;