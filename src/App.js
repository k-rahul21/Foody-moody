import  React  from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(<AppLayout/>);