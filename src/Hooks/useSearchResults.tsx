import { useContext } from "react";
import { searchResultsContext } from "../Providers/SearchResultsProvider";

const useSeachResults = () => useContext(searchResultsContext);

export default useSeachResults;
