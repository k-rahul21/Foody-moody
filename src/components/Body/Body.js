import { useEffect, useState } from "react";
import RestaurantCard from "../RestrauntCard/RestrauntCard";
import PageSkeleton from "../PageSkeleton/PageSkeleton"


const searchHandler = (searchText, restaurants) => {
  console.log("from search",restaurants);
  const filterData = restaurants.filter((restaurants) => restaurants?.data?.name.toLowerCase().includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log("render!!")

  useEffect(() => {
    getRestaurants();
    console.log("calling useEffect!")
  }, []);

async function getRestaurants() {
  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6298774&lng=77.1021305&page_type=DESKTOP_WEB_LISTING")
    .then((response) => response.json())
    .then((data) => (setRestaurants(data?.data?.cards[2]?.data?.data?.cards), setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards)))
    .catch((error) => {
      console.log(error)
    });
  }

  console.log("restaurants",restaurants)

  // conditional rendering 
  // if restaurants is empty => show page skeleton component
  // if restaurants has data => show actual ui

  // not render component (early return)
  if(!restaurants) return null;

  if(filteredRestaurants?.length === 0) return <h1>No restaurant match your filter!! try with some different filter!</h1>

  return restaurants.length === 0 ? (
    <PageSkeleton/>
  ) : (
  <div className="body-container">
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
        const data = searchHandler(searchText, restaurants);
        setFilteredRestaurants(data);
      }}
      >
        Search
      </button>
    </div>
    <div className="restaurant-list">
      {filteredRestaurants.length > 0 ? (
         filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
      ) : (
        <>Trying to fetch your data</>
      )}
    </div>
  </div>
  )
}

export default Body;