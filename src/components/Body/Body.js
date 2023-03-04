import RestrauntCard from "../RestrauntCard/RestrauntCard";
import { restrauntList } from "../../constants";
import { useState } from "react";

const searchHandler = (searchText, restraunts) => {
  const filterData = restraunts.filter((restraunts) => restraunts.data.name.toLowerCase().includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntList);

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
      {restaurants.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
      })}
    </div>
  </>
  )
}

export default Body;