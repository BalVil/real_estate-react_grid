import { AiOutlineSearch } from "react-icons/ai";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="content__text">
          Search the largest selection of apartments, multi-family homes and
          luxury homes
        </p>
        <form action="" className="search-form">
          <div>
            <input
              type="text"
              placeholder="Enter keyword..."
              className="search-form__input"
            />
          </div>
          <div className="search-form__radio">
            <input type="radio" defaultChecked />
            <label htmlFor="">Buy</label>
            <input type="radio" />
            <label htmlFor="">Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
