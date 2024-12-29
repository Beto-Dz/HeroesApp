import { types } from "../types/types";

export const authReducer = (state, action) => {
  // se usara directamente el types para ahi definir las
  // acciones posibles y no evaluar estrictamente texto de action.type
  switch (action.type) {
    case types.login:
      return {
        logged: true,
        name: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
