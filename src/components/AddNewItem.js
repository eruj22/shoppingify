import React from "react";
import styled from "styled-components";

function AddNewItem({ setShowAddItem }) {
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
        />
        <label className="form__label" htmlFor="note">
          Note (optional)
        </label>
        <textarea
          className="form__input form--textarea"
          id="note"
          rows="6"
          placeholder="Enter a note"
        />
        <label className="form__label" htmlFor="image">
          Image (optional)
        </label>
        <input
          className="form__input"
          type="text"
          id="image"
          placeholder="Enter a image url"
        />
        <label htmlFor="category" className="form__label">
          Category
        </label>
        {/* TODO: the right select options, take them dynamically from the db */}
        <select name="category" id="category" className="form__input">
          <option value="meat and fish">Meat and Fish</option>
          <option value="fruits and vegetables">Fruits and Vegetables</option>
        </select>
      </form>

      <div className="buttons">
        <button className="btn" onClick={() => setShowAddItem(false)}>
          cancel
        </button>
        <button className="btn btn--save">save</button>
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
