import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext, AppReducer } from "./AppContext";
import { Product } from "../utils/types";

interface ChildrenProps {
  children?: React.ReactNode;
}

const AppState: React.FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    products: [
      {
        id: uuidv4(),
        name: "SmartPhone",
        description: "An Apple Iphone 15",
        url: "http://anyvalidurl.example.com",
      },
    ],
    theme: "dark",
    language: "en",
  });

  const changeTheme = (theme: string) => {
    dispatch({ type: "TOGGLE_THEME", payload: theme });
  };

  const changeLanguage = (language: string) => {
    dispatch({ type: "TOGGLE_LANGUAGE", payload: language });
  };

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };
  const editProduct = (product: Product) =>
    dispatch({ type: "EDIT_PRODUCT", payload: product });
  const removeProduct = (id: string) =>
    dispatch({ type: "REMOVE_PRODUCT", payload: id });

  return (
    <AppContext.Provider
      value={[
        {
          products: state.products,
          theme: state.theme,
          language: state.language,
          addProduct,
          editProduct,
          removeProduct,
        },
        changeTheme,
        changeLanguage,
      ]}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
