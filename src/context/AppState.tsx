import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext, AppReducer } from "./AppContext";
import { Product } from "../utils/types";

interface ChildrenProps {
  children?: React.ReactNode;
}

const AppState: React.FC<ChildrenProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<Boolean>(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [state, dispatch] = useReducer(AppReducer, {
    products: [
      {
        id: uuidv4(),
        name: "SmartPhone",
        description: "An Apple Iphone 15",
        url: "https://anyvalidurl.example.com",
      },
    ],
  });

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
          isDark,
          addProduct,
          editProduct,
          removeProduct,
        },
        toggleTheme,
      ]}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
