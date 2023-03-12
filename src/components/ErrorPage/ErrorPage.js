import { useRouteError, Link } from "react-router-dom";
import emptyImage from "../../assets/img/emptyImage.webp";
import "./ErrorPage.scss";
 
const ErrorPage = () => {
  const err = useRouteError();
  const {status} = err;
  return (
    <div className="empty-container">
      <img className="empty-image" src={emptyImage} />
      <div className="empty-container-info">
        <p className=""> This is a {status} page and we think it's fairly clear You aren't going to find what you're looking for here But we know you're hungry, so don't fret or rage Hit that big black button to go back to our homepage. </p>
        <button className="home-btn search-btn text-14">
          <Link to="/">
            Back to home
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ErrorPage;