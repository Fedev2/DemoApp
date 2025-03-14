import { Outlet } from "react-router-dom";
import "./styles.css";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

type ContainerProps = {
  isSidebarCollapsed: boolean;
  screenWidth: number;
};

const Container = ({ isSidebarCollapsed, screenWidth }: ContainerProps) => {
  const { i18n } = useTranslation();

  const classes = classNames({
    "body-l": true && i18n.language === "en",
    "body-trimmed-l":
      !isSidebarCollapsed && screenWidth > 768 && i18n.language === "en",
    "body-r": true && i18n.language === "ar",
    "body-trimmed-r":
      !isSidebarCollapsed && screenWidth > 768 && i18n.language === "ar",
  });

  return (
    <>
      <div className={classes}>
        <Outlet />
      </div>
    </>
  );
};

export default Container;
