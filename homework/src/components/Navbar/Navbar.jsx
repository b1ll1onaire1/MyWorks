import React from "react";
import { navs } from "../../utils/navs";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      {navs.map((item) => (
        <Link to={item.path}>
          <p className={style.navLinks} key={item.id}>
            {item.name}
          </p>
        </Link>
      ))}
    </>
  );
}

export default Navbar;
