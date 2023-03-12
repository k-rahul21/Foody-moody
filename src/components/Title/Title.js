import { Link } from "react-router-dom";
import foodyMoody from "../../assets/img/foodyMoody.png";

export const Title = () => (
  <Link to="/">
    {/* <h1 className="title" key="h1">
      Foody Moody
    </h1> */}
    <img className="title-logo" src={foodyMoody}/>
  </Link>
);
