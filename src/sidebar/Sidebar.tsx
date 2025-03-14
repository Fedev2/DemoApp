import { Link } from "react-router-dom";
import "./sidebar.css";
import { useTranslation } from "react-i18next";
import { Close, BarChart, Add, List, Home } from "../icons";
import classNames from "classnames";
import { Fragment } from "react/jsx-runtime";

type sidebarProps = {
  isSidebarCollapsed: boolean;
  changeIsSidebarCollapsed: (isSidebarCollapsed: boolean) => void;
};

const Sidebar = ({
  isSidebarCollapsed,
  changeIsSidebarCollapsed,
}: sidebarProps) => {
  const { t } = useTranslation();
  const items = [
    {
      routerLink: "",
      icon: <Home />,
      label: t("home"),
    },
    {
      routerLink: "add",
      icon: <Add />,
      label: t("add"),
    },
    {
      routerLink: "list",
      icon: <List />,
      label: t("list"),
    },
  ];
  const sidebarClasses = classNames({
    sidenav: true,
    "sidenav-collapsed": isSidebarCollapsed,
  });

  const closeSidenav = () => {
    changeIsSidebarCollapsed(true);
  };

  const toggleCollapse = (): void => {
    changeIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={sidebarClasses}>
      <div className="logo-container">
        <button className="logo-h" onClick={toggleCollapse}>
          <BarChart />
        </button>
        {!isSidebarCollapsed && (
          <Fragment>
            <div className="logo-text">Demo</div>
            <button className="btn-close" onClick={closeSidenav}>
              <Close />
            </button>
          </Fragment>
        )}
      </div>
      <div className="sidenav-nav">
        {items.map((item) => (
          <li key={item.label} className="sidenav-nav-item">
            <Link className="sidenav-nav-link" to={item.routerLink}>
              <i
                className={classNames({
                  "sidenav-link-icon": true,
                  // [item.icon]: true,
                })}
              >
                {item.icon}
              </i>
              {!isSidebarCollapsed && (
                <span className="sidenav-link-text">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
