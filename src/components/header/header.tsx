import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import * as types from "../../redux/types";

const Header = ({ increment, colour }: any) => {
  return (
    <div className={`header ${colour === "normal" ? `font-white` : colour}`}>
      <div className="logo-header">
        <Link to="/">Logo</Link>
      </div>
      <div className="empty-clickable-area" onClick={increment}></div>
      <div className={`about-header lexend-exa`}>
        <Link to="/about">About</Link>
      </div>
      <div className="projects-header">Projects</div>
      <div className="contacts-header">Contact</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.changeColour,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: types.CHANGE_COLOUR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
