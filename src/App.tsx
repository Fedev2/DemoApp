import { Fragment, useEffect, useState, useContext, ChangeEvent } from "react";
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
import { Bulb } from "./icons";
import "./index.css";

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const { i18n, t } = useTranslation();
  const i18nLanguage = i18n.language;
  const [lang, setLang] = useState<String>(i18nLanguage);
  const { ready } = useTranslation();

  const [{ isDark }, toggleTheme] = useContext(AppContext);

  const changeTheme = () => {
    toggleTheme(isDark);
  };

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  const classes = classNames({
    dark: isDark,
    light: !isDark,
    textFlow: i18n.language === "ar",
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
          <header>
            <li>
              <label>
                &#127760;
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    changeLanguage(e)
                  }
                >
                  <option value="en">{t("en")}</option>
                  <option value="ar">{t("ar")}</option>
                </select>
              </label>
            </li>
            <li>
              <a onClick={changeTheme}>
                <Bulb />
              </a>
            </li>
          </header>

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
