import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import { useAppContext } from "../context/context";
import { getUniqueCategories } from "../utils/functions";
import { Toaster } from "react-hot-toast";
import { notifySuccess } from "../utils/functions";

function AddNewItem({ setShowAddItem }) {
  const { items, againFetchItems } = useAppContext();
  const uniqueCategories = getUniqueCategories(items);
  const [addItemError, setAddItemError] = useState({});

  const [addNewItem, setAddNewItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, note, image, category } = addNewItem;
    const validateName = name.trim();
    const validateNote = note.trim();
    const validateImage = image.trim();
    const validateCategory = category.trim();

    let errors = {};
    if (validateName.length < 2) {
      errors.name = "Item name must be longer than 2 characters";
    }
    if (validateCategory.length < 1) {
      errors.category = "Input category";
    }
    if (validateImage) {
      const validateUrl = image.match(
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
      );

      if (!validateUrl) {
        errors.image = "Input right image url";
      }
    }

    setAddItemError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    let sendItem = {
      name: validateName,
      note: validateNote,
      image: validateImage,
      category: validateCategory,
    };

    axios
      .post(process.env.REACT_APP_API_URL, sendItem)
      .catch((err) => console.log(err));
    setAddNewItem({ name: "", note: "", image: "", category: "" });

    notifySuccess("Successfully added item");
    setShowAddItem(false);
    againFetchItems();
  };

  return (
    <Wrapper>
      <Toaster
        toastOptions={{
          style: {
            padding: "1rem",
            color: "#111",
            background: "#39DB80",
          },
        }}
      />

      <h2 className="title">Add a new item</h2>
      <Form>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className={addItemError.name ? "input errorInput" : "input"}
          type="text"
          id="name"
          placeholder="Enter a name"
          value={addNewItem.name}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, name: e.target.value })
          }
        />
        {addItemError.name && (
          <span className="errorText">{addItemError.name}</span>
        )}

        <label className="label" htmlFor="note">
          Note (optional)
        </label>
        <textarea
          className="input textarea"
          id="note"
          rows="6"
          placeholder="Enter a note"
          value={addNewItem.note}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, note: e.target.value })
          }
        />

        <label className="label" htmlFor="image">
          Image (optional)
        </label>
        <input
          className={addItemError.image ? "input errorInput" : "input"}
          type="text"
          id="image"
          placeholder="Enter a image url"
          value={addNewItem.image}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, image: e.target.value })
          }
        />
        {addItemError.image && (
          <span className="errorText">{addItemError.image}</span>
        )}

        <label htmlFor="category" className="label">
          Category
        </label>
        <input
          className={addItemError.category ? "input errorInput" : "input"}
          name="category"
          type="text"
          list="category"
          value={addNewItem.category}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, category: e.target.value })
          }
        />
        <datalist id="category">
          {uniqueCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </datalist>
        {addItemError.category && (
          <span className="errorText">{addItemError.category}</span>
        )}
      </Form>

      <Buttons>
        <BtnSecondary text={"cancel"} onClick={() => setShowAddItem(false)} />
        <BtnPrimary text={"save"} onClick={handleSubmit} />
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  padding: 1rem 2rem;
  position: relative;
  min-width: 330px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    z-index: 2;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const Form = styled.form`
  .input {
    display: block;
    width: 100%;
    border: 2px solid lightgray;
    border-radius: 0.5rem;
    padding: 0.7rem 0.5rem;
  }

  .label {
    display: block;
    margin: 1.5rem 0 0.6rem;
  }

  .textarea {
    resize: none;
  }

  .errorText {
    display: block;
    font-size: 0.9rem;
    font-weight: bold;
    color: red;
    margin-top: 0.3rem;
  }

  .errorInput {
    border: 2px solid red;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export default AddNewItem;
