import css from "./SearchBox.module.css";

function SearchBox({ searchKey, setSearchKey }) {
  function handleChange(event) {
    setSearchKey(event.target.value);
  }

  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        onChange={handleChange}
        value={searchKey}
        type="text"
        name="search"
      />
    </div>
  );
}

export default SearchBox;