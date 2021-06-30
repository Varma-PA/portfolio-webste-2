import React from "react";
import { connect } from "react-redux";

export const LandingPage = (props: any) => {
  return (
    <div className="landing-page">
      <div className="first-section">
        <div className="photo-area"></div>
        <div className="purple-box"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ ...state.changeColour });

const mapDispatchToProps = (dispatch: any) => {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
