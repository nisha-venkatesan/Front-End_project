import React from "react";
import MusicLogo from "./music-logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <aside className="logo">
      <figure>
        <Link to={"/"}>
          <img src={MusicLogo} alt="" width={"78"} />
        </Link>
      </figure>
    </aside>
  );
};

export default Logo;
