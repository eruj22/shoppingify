import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function AddNewItem({ setShowAddItem }) {
  const [addNewItem, setAddNewItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addNewItem.name || !addNewItem.category) {
      console.log("input name and category");
      return;
    }
    axios
      .post(process.env.REACT_APP_API_URL, addNewItem)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setAddNewItem({ name: "", note: "", image: "", category: "" });
    // TODO: add toast notification when item is added successfully
    // TODO: input validation for the user
    // TODO: on add item reload display of items
  };

  return (
    <Wrapper>
      <h2 className="title">Add a new item</h2>

      <form className="form">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          placeholder="Enter a name"
          value={addNewItem.name}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, name: e.target.value })
          }
        />
        <label className="form__label" htmlFor="note">
          Note (optional)
        </label>
        <textarea
          className="form__input form--textarea"
          id="note"
          rows="6"
          placeholder="Enter a note"
          value={addNewItem.note}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, note: e.target.value })
          }
        />
        <label className="form__label" htmlFor="image">
          Image (optional)
        </label>
        <input
          className="form__input"
          type="text"
          id="image"
          placeholder="Enter a image url"
          value={addNewItem.image}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, image: e.target.value })
          }
        />
        <label htmlFor="category" className="form__label">
          Category
        </label>
        {/* TODO: the right select options, take them dynamically from the db */}
        <select
          name="category"
          id="category"
          className="form__input"
          value={addNewItem.category}
          onChange={(e) =>
            setAddNewItem({ ...addNewItem, category: e.target.value })
          }
        >
          {/* TODO: display unique categories */}
        </select>
      </form>

      <div className="buttons">
        <button className="btn" onClick={() => setShowAddItem(false)}>
          cancel
        </button>
        <button className="btn btn--save" type="submit" onClick={handleSubmit}>
          save
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  padding: 1rem 2rem;
  position: relative;
  min-width: 330px;
  display: flex;
  flex-direction: column;

  .form {
    &__input {
      display: block;
      width: 100%;
      border: 2px solid lightgray;
      border-radius: 0.5rem;
      padding: 0.7rem 0.5rem;
    }

    &__label {
      display: block;
      margin: 1.5rem 0 0.6rem;
    }

    &--textarea {
      resize: none;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }

  .btn {
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;

    &--save {
      background-color: orange;
      color: #fff;
      margin-left: 1rem;
    }
  }
`;

export default AddNewItem;
