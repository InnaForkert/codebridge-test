import { setFilter } from "../state/features/filter";
import { useAppDispatch, useAppSelector } from "../state/utils/hooks";

function FilterForm() {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector((state) => state.filter);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <label>
      Filter by keywords
      <input
        type="text"
        placeholder="The most successful IT companies in 2020"
        onChange={(e) => handleInput(e)}
        value={filterValue}
      />
    </label>
  );
}

export default FilterForm;
