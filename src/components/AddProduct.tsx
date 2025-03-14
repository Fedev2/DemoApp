import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import "./AddProduct.css";

const AddProduct: React.FC = () => {
  const [{ addProduct }] = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { t } = useTranslation();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    addProduct({
      id: uuidv4(),
      name,
      description,
      url,
    });

    e.preventDefault();
    // navigate("/");
  };

  // i18n.lan

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={t("name")}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder={t("desc")}
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder={t("url")}
        />
      </div>
      <div className="forButton">
        <button>{t("add")}</button>
      </div>
      <div className="cancel">
        <Link className="link" to="/">
          {t("cancel")}
        </Link>
      </div>
    </form>
  );
};

export default AddProduct;
