import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ count }) {
  const handleButtons = () => {
    alert("Sorry,Access Denied!");
  };
  return (
    <div>
      <div className="App-Header">
        <div className="App-title">
          <div className="item-count">
            <h3>Item Master</h3>
            <div className="count">{count}</div>
          </div>
          <p>Keep track of your items.</p>
        </div>

        <div className="Header-Buttons">
          <button className="ui primary small button" onClick={handleButtons}>
            <i className="fa-solid fa-print"></i>Print
          </button>
          <button className="ui primary small button" onClick={handleButtons}>
            <i className="fa-solid fa-download"></i>Export
          </button>
          <button className="ui primary small button" onClick={handleButtons}>
            <i className="fa-solid fa-paper-plane"></i>Send
          </button>
          <button className="ui primary small button" onClick={handleButtons}>
            <i className="fa-solid fa-plus"></i>Create
          </button>
        </div>
      </div>
      <div className="Header-Down">
        <div className="Header-down-sorts">
          <div className="sorting">
            <h5>Search By</h5>
            <select className="ui dropdown">
              <option value="">All</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
          <div className="sorting">
            <h5>Sort By</h5>
            <select className="ui dropdown">
              <option value="">All</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
          <div className="sorting">
            <h5>Sort Order</h5>
            <select className="ui  dropdown">
              <option value="">Ascending</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
        </div>
        <div className="Header-down-Buttons">
          <Link to="/ShowItems" className="Link-style">
            <button className="ui primary small button">
              <i className="fa-solid fa-filter"></i>
                Show
            </button>
          </Link>
          <button
            className="ui inverted primary small button"
            onClick={handleButtons}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
