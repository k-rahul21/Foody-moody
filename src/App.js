import  React  from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import AboutUs from "./components/AboutUs/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <AboutUs/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(<RouterProvider router={appRoute}/>);