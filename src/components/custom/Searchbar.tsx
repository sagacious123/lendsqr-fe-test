import { PiMagnifyingGlass } from "react-icons/pi";
import "./style.scss";

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for anything" />
      <button className="searchbar-btn">
        <PiMagnifyingGlass height={"20px"} width={"20px"} />
      </button>
    </div>
  );
};
