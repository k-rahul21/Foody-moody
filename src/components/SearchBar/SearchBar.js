import { useState } from "react";

const searchHandler = (searchText, restaurants) => {
  console.log("from search",restaurants);
  const filterData = restaurants.filter((restaurants) => restaurants?.data?.name.toLowerCase().includes(searchText));
  return filterData;
}

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
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
)}

export default SearchBar;