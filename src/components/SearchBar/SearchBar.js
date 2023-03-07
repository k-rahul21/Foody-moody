import { useState } from "react";

const searchHandler = (searchText, restraunts) => {
  console.log("from search",restraunts);
  const filterData = restraunts.filter((restraunts) => restraunts?.data?.name.toLowerCase().includes(searchText));
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