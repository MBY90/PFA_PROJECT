import { GET_PATIENTS } from "../actions/actionTypes";

const initState = {
  patients: [],
};
export const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      return { ...state, patients: action.payload };

    default:
      return state;
  }
};
