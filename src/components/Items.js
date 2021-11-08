import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import DisplayItems from "./DisplayItems";

function Items() {
  return (
    <Wrapper>
      <header className="header">
        <h1 className="header__title">
          <span className="header--textOrange">Shoppingify</span> allows you to
          take your shopping list wherever you go
        </h1>
        <div className="search">
          <AiOutlineSearch className="search__icon" />
          <input
            className="search__input"
            type="search"
            placeholder="search item"
            aria-label="search item"
          />
        </div>
      </header>

      <main className="main">
        <DisplayItems />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 2rem 5rem;
  background-color: #e8f7fc;

  .header {
    display: flex;

    &__title {
      margin-top: 0;
      max-width: 850px;
    }

    &--textOrange {
      color: orange;
    }
  }

  .search {
    position: relative;
    margin-left: 4rem;

    &__input {
      font-size: 1rem;
      padding: 0.8rem 0.5rem 0.8rem 2.5rem;
      min-width: 260px;
      width: 20vw;
    }

    &__icon {
      position: absolute;
      font-size: 1.2rem;
      top: 0.75rem;
      left: 0.7rem;
    }
  }
`;

export default Items;
