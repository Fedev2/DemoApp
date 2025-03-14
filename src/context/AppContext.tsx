import { createContext } from "react";
import { Product } from "../utils/types";

interface State {
  products: Product[];
}

interface Action {
  type: string;
  payload: any;
}

export const AppContext = createContext<any>(null);

export const AppReducer = (state: State, action: Action): State => {
  switch (action.type) {
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
