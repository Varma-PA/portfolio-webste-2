import * as types from "../types";

interface counterModel {
  count: number;
  colour: string;
}

const intialState: counterModel = {
  count: 0,
  colour: "normal",
};

interface actionType {
  type: string;
  payload?: any;
}

function changeColourNumber(theNumber: number) {
  switch (theNumber) {
    case 0:
      return "normal";
    case 1:
      return "red";
    case 2:
      return "yellow";
    case 3:
      return "green";

    default:
      return theNumber;
  }
}

export default function changeColour(state = intialState, action: actionType) {
  switch (action.type) {
    case types.CHANGE_COLOUR:
      if (state.count >= 3) {
        state.count = -1;
      }
      const thePresentCount = state.count + 1;

      return {
        count: thePresentCount,
        colour: changeColourNumber(thePresentCount),
      };

    default:
      return state;
  }
}
