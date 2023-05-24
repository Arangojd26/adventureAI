import React from "react";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";
import { NavbarContext } from "../../context/NavbarProvider";

const Navbar = (props) => {
  const { setScroll } = React.useContext(NavbarContext);

  const goHome = () => {
    props.history.push("/");
    localStorage.setItem("indexSlide", JSON.stringify(0));
    setScroll(0);
  };

  return (
    <header className="o-container-navbar">
      <div className="o-name-navbar" onClick={() => goHome()}>
        AdventureAI
      </div>
      <div className="o-wrap"></div>
    </header>
  );
};

export default withRouter(Navbar);
