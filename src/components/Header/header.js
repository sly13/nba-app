import React from "react";
import SideNav from "./SideNav/sideNav";
import style from "./header.css";
import FontAwersome from "react-fontawesome";
import { Link } from "react-router-dom";

const Header = props => {
  const navBars = () => (
    <div className={style.bars}>
      <FontAwersome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: "#dfdfdf",
          padding: "10px",
          cursor: "pointer"
        }}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
  );

  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
