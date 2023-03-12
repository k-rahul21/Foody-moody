import { useEffect, useState } from "react";
import RestaurantCard from "../RestrauntCard/RestrauntCard";
import SkeletonListing from "../Skeletonlisting/SkeletonListing";

const searchHandler = (searchText, restaurants) => {
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

  console.log("restaurants", restaurants);
  console.log("filtered restaurants", filteredRestaurants)


  if(!restaurants) return <div>No restaurants falls with your search text!!</div>;

  if(filteredRestaurants?.length === 0) return <SkeletonListing/>

  return restaurants.length === 0 ? (
    <SkeletonListing/>
  ) : (
  <div className="body-section">
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
      <button className="search-btn text-14" onClick={() =>  {
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
        <SkeletonListing/>
      )}
    </div>
  </div>
  )
}

export default Body;