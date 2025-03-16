import { Fragment, useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ProductList from "./components/Products";
import Container from "./container";
import AddProduct from "./components/AddProduct";
import classNames from "classnames";
import { AppContext } from "./context/AppContext";
import Sidebar from "./sidebar/Sidebar";
import "./index.css";
import Header from "./components/Header";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const { t } = useTranslation();
  const { ready } = useTranslation();

  const [{ theme, language }] = useContext(AppContext);

  const classes = classNames({
    dark: theme === "dark",
    light: theme === "light",
    textFlow: language === "ar",
  });

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (ready) {
    return (
      <Fragment>
        <div className={classes}>
          <Header />
          <Sidebar
            isSidebarCollapsed={isSidebarCollapsed}
            changeIsSidebarCollapsed={(value) => setIsSidebarCollapsed(value)}
          />
          <Routes>
            <Route
              element={
                <Container
                  screenWidth={screenWidth}
                  isSidebarCollapsed={isSidebarCollapsed}
                />
              }
            >
              <Route path="" element={<Home />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/list" element={<ProductList />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
          <footer>
            <li>{t("cp")}</li>
          </footer>
        </div>
      </Fragment>
    );
  }
  return <span>Loading...</span>;
};

export default App;
