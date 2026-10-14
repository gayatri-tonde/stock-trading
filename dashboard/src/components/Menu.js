import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  function handleSelectedMenu(index) {
    setSelectedMenu(index);
  }

  function handleProfileClick() {
    return;
  }

  return (
    <div className="menu-container">
      <img src="Finora Green Fintech Logo.png" style={{ width: "15%" }} />
      <div className="menus">
        <ul className="mt-4">
          <li>
            <Link
              to="/"
              style={{
                color: selectedMenu === 0 ? "#00a86b" : "black",
                textDecoration: "none",
              }}
              onClick={() => {
                handleSelectedMenu(0);
              }}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{
                color: selectedMenu === 1 ? "#00a86b" : "black",
                textDecoration: "none",
              }}
              onClick={() => {
                handleSelectedMenu(1);
              }}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{
                color: selectedMenu === 2 ? "#00a86b" : "black",
                textDecoration: "none",
              }}
              onClick={() => {
                handleSelectedMenu(2);
              }}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{
                color: selectedMenu === 3 ? "#00a86b" : "black",
                textDecoration: "none",
              }}
              onClick={() => {
                handleSelectedMenu(3);
              }}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className="links"
              style={{
                color: selectedMenu === 4 ? "#00a86b" : "black",
                textDecoration: "none",
              }}
              onClick={() => {
                handleSelectedMenu(4);
              }}
            >
              <p>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username mt-3">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
