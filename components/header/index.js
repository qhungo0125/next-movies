import React from "react";
// import "./style.scss";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { GrClose } from "react-icons/gr";
// import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const searchContent = "";
  const showNav = false;
  const showSearch = false;

  return (
    <div className="header__container">
      <div className="header__search">
        <Link href="/" className="header__icon">
          <img style={{ width: "1.2rem" }} src="/next.svg" alt="D3Movies" />
          <p>D3Movies</p>
        </Link>

        <div className="searchinput">
          <div
            className="search__icon"
          >
            {/* <FaSearch /> */}
          </div>
          <input
            type="text"
            placeholder="Search movies..."
          />
        </div>
        <div className="nav__icon">
        {/* <GrClose/> */}
        {/* <GiHamburgerMenu/> */}
        </div>
      </div>
      <nav className={
        // "header__nav active" : 
        "header__nav"}>
        <Link
          className="nav__link"
          href="/"
        >
          Home
        </Link>
        <Link
          className="nav__link"
          href="/popular"
        >
          Popular
        </Link>
        <Link
          className="nav__link"
          href="/upcoming"
        >
          upcoming
        </Link>
        <Link
          className="nav__link"
          href="/toprated"
        >
          top rated
        </Link>
      </nav>
    </div>
  );
};

export default Header;
