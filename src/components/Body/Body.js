import RestrauntCard from "../RestrauntCard/RestrauntCard";
import { useEffect, useState } from "react";

const searchHandler = (searchText, restraunts) => {
  const filterData = restraunts.filter((restraunts) => restraunts.data.name.toLowerCase().includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  console.log("render!!")

  useEffect(() => {
    getRestraunts();
    console.log("calling useEffect!")
  }, []);

async function getRestraunts() {
  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6298774&lng=77.1021305&page_type=DESKTOP_WEB_LISTING")
    .then((response) => response.json())
    .then((data) => setRestaurants(data?.data?.cards[2]?.data?.data?.cards))
    .catch((error) => {
      console.log(error)
    });
  }

  return (
  <>
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-btn" onClick={() =>  {
        const data = searchHandler(searchText, restrauntList);
        setRestaurants(data);
      }}
      >
        Search
      </button>
    </div>
    <div className="restraunt-list">
      {restaurants.length > 0 ? (
         restaurants.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
        })
      ) : (
        <>Trying to fetch your data</>
      )}
    </div>
  </>
  )
}

export default Body;