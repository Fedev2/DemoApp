import { Fragment, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import "./Products.css";

interface Product {
  id: string | null;
  name: string;
  description: string;
  url: string;
}

const ProductList = () => {
  const [{ products }] = useContext(AppContext);
  const { t } = useTranslation();
  if (products.length === 0) return null;

  return (
    <Fragment>
      <div className="containr">
        <h3 className="text-h">{t("proinfo")}</h3>
        <div className="text-sh">{t("prolis")}</div>
        {products.map((product: Product) => (
          <div className="text-pr" key={product.id}>
            <div className="text">
              <p className="text-d">{product.name}</p>
              <p className="text-d">{product.description}</p>
              <p className="text-d">{product.url}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
