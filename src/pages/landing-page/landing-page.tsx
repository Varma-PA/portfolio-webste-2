import React from "react";
import { connect } from "react-redux";
import * as types from "../../redux/types";

export const LandingPage = ({ increment, colour }: any) => {
  return (
    <div className="landing-page">
      <div className="first-section">
        <div className="photo-area"></div>
        <div
          className={`purple-box ${
            colour === "normal" ? "purple-box--normal-box" : colour
          } `}
          onClick={increment}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/achyuth.png"}
            alt="my-pic"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ ...state.changeColour });

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: types.CHANGE_COLOUR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
