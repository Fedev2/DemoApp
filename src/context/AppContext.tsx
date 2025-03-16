import { createContext } from "react";
import { Product } from "../utils/types";

interface State {
  products: Product[];
  theme: string;
  language: string;
}

interface Action {
  type: string;
  payload: any;
}

export const AppContext = createContext<any>(null);

export const AppReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = action.payload === "dark" ? "light" : "dark";
      return {
        ...state,
        theme: newTheme,
      };
    }
    case "TOGGLE_LANGUAGE": {
      return { ...state, language: action.payload };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case "EDIT_PRODUCT": {
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload.id ? action.payload : product;
        }),
      };
    }
    case "REMOVE_PRODUCT": {
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
