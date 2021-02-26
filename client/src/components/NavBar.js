import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faPlus,
  faHeart,
  faGifts,
  faBookmark,
  faBookReader,
  faShoppingCart,
  faBell,
  faGift,
  faQuestionCircle,
  faChartLine,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        {/* Logo */}
        <div className="logo">
          <img
            src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="sdfgh"
            style={{ width: "75px" }}
          />
          <a href="#aaa" className="brand__logo">
            Flipkart <span className="plus">Plus</span>
            <img
              style={{ width: "10px" }}
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="hjkl;"
            />
          </a>
        </div>

        {/* SearchBar */}
        <div className="search__bar">
          <input
            type="search"
            placeholder="Search for products, brands and more"
          />
          <button className="search__icon_button">
            <FontAwesomeIcon
              className="search__icon"
              icon={faSearch}
              size="lg"
            />
          </button>
        </div>

        {/* Right hand side items */}
        <div className="right__items">
          <div className="dropdown">
            <button className="signIn__button__dropbtn">Login</button>
            <div className="triangle-up"></div>
            <div className="dropdown-content">
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faUserCircle}
                />
                My Profile{" "}
              </a>

              <a href="#aaa">
                {" "}
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faPlus}
                />
                Flipkart Plus Zone
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faBookReader}
                />
                Orders
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faBookmark}
                />
                Wishlist
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faHeart}
                />
                Rewards
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faGifts}
                />
                Gift Cards
              </a>
            </div>
          </div>

          {/* -----------------------More Dropdown------------------------ */}
          <div className="more__dropdown">
            <a className="dropdown__more__link" href="#aaa">
              More
              <span className="signIn__button__icon"></span>
            </a>
            <div className="triangle-up"></div>
            <div className="more__dropdown__content">
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faBell}
                />
                Notification Preferences{" "}
              </a>

              <a href="#aaa">
                {" "}
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faGift}
                />
                Sell on Flipkart
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faQuestionCircle}
                />
                24x7 Customer Care
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faChartLine}
                />
                Advertise
              </a>
              <a href="#aaa">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faDownload}
                />
               Download App
              </a>
              {/* <a href="#">
                <FontAwesomeIcon
                  className="dropdown__list__icons"
                  icon={faGifts}
                />
                Gift Cards
              </a> */}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}

          <Link className="dropdown__cart" to="/listpage">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default App;
