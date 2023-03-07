import { useEffect, useState } from "react";
import RestrauntCard from "../RestrauntCard/RestrauntCard";
import PageSkeleton from "../PageSkeleton/PageSkeleton"


const searchHandler = (searchText, restraunts) => {
  console.log("from search",restraunts);
  const filterData = restraunts.filter((restraunts) => restraunts?.data?.name.toLowerCase().includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log("render!!")

  useEffect(() => {
    getRestraunts();
    console.log("calling useEffect!")
  }, []);

async function getRestraunts() {
  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6298774&lng=77.1021305&page_type=DESKTOP_WEB_LISTING")
    .then((response) => response.json())
    .then((data) => (setRestaurants(data?.data?.cards[2]?.data?.data?.cards), setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards)))
    .catch((error) => {
      console.log(error)
    });
  }

  // conditional rendering 
  // if restaurants is empty => show page skeleton component
  // if restaurants has data => show actual ui

  // not render component (early return)
  if(!restaurants) return null;

  if(filteredRestaurants?.length === 0) return <h1>No restaurant match your filter!! try with some different filter!</h1>

  return restaurants.length === 0 ? (
    <PageSkeleton/>
  ) : (
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
        const data = searchHandler(searchText, restaurants);
        setFilteredRestaurants(data);
      }}
      >
        Search
      </button>
    </div>
    <div className="restraunt-list">
      {filteredRestaurants.length > 0 ? (
         filteredRestaurants.map((restaurant) => {
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