import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import { Product } from "../utils/types";
import { ErrorRow } from "../utils/types";
import "./AddProduct.css";

const AddProduct: React.FC = () => {
  const [{ addProduct }] = useContext(AppContext);
  const [inputFields, setInputFields] = useState<Product>({
    id: "",
    name: "",
    description: "",
    url: "",
  });
  const [errors, setErrors] = useState<ErrorRow>({ error: "", errorField: "" });
  const [submitStatus, setSubmitStatus] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitStatus(true);
  };

  const validateValues = (
    inputValues: Product
  ): { error: string; errorField: string } | {} => {
    if (inputValues.name.length === 0) {
      return { error: t("entname"), errorField: "name" };
    }
    if (inputValues.description.length === 0) {
      return { error: t("entdes"), errorField: "description" };
    }
    if (inputValues.url.length === 0) {
      return { error: t("enturl"), errorField: "url" };
    }
    return {};
  };

  const finishSubmit = () => {
    addProduct({
      id: uuidv4(),
      name: inputFields.name,
      description: inputFields.description,
      url: inputFields.url,
    });
  };

  useEffect(() => {
    if (
      (Object.keys(errors).length === 0 || errors?.error === "") &&
      submitStatus
    ) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          name="name"
          value={inputFields.name}
          onChange={handleChange}
          type="text"
          placeholder={t("name")}
          style={{
            border: errors.errorField == "name" ? "2px solid red" : "",
          }}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={inputFields.description}
          onChange={handleChange}
          type="text"
          placeholder={t("desc")}
          style={{
            border: errors.errorField == "description" ? "2px solid red" : "",
          }}
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input
          name="url"
          value={inputFields.url}
          onChange={handleChange}
          type="text"
          placeholder={t("url")}
          style={{
            border: errors.errorField == "url" ? "2px solid red" : "",
          }}
        />
      </div>
      <div className="forButton">
        <button>{t("add")}</button>
      </div>
      <p className="error">{errors.error ?? errors.error}</p>
      <p className="success">
        {Object.keys(errors).length === 0 ? t("recupd") : ""}
      </p>
      <div className="cancel">
        <Link className="link" to="/">
          {t("cancel")}
        </Link>
      </div>
    </form>
  );
};

export default AddProduct;
