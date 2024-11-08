
import css from "./SearchBox.module.css";

const SearchBox = ({
  filterValue,
  handleFilter,
}) => {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.inputClassName}
          type="text"
          value={filterValue}
          onChange={(event) =>
            handleFilter(event.target.value)
          }
        />
      </label>
    </div>
  );
};

export default SearchBox;
