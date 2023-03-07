const SearchBar = () => {
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
      <div>
        <img src="C:\Foody-Moody\assets\search-icon.png"/>
      </div>
  </div>
)}