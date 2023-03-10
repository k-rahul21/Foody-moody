import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const {status, statusText} = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went wrong!!</h3>
      <p>Status : {status} , Status Text : {statusText} </p>
    </div>
  )
}

export default ErrorPage;