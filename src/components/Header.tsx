import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import { Bulb } from "../icons";

const Header = () => {
  const [{ theme, language }, changeTheme, changeLanguage] =
    useContext(AppContext);
  const { i18n, t } = useTranslation();

  const updateTheme = () => {
    changeTheme(theme);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div className="classes">
      <header>
        <li>
          <label>
            &#127760;
            <select onChange={handleLanguageChange} value={language}>
              <option value="en">{t("en")}</option>
              <option value="ar">{t("ar")}</option>
            </select>
          </label>
        </li>
        <li>
          <a onClick={updateTheme}>
            <Bulb />
          </a>
        </li>
      </header>
    </div>
  );
};

export default Header;
