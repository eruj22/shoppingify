import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import DisplayItems from "../components/DisplayItems";
import { useAppContext } from "../context/context";

function Items() {
  const { items } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

  let filteredItems = items;
  if (searchQuery !== "") {
    filteredItems = items.filter((item) => {
      const { name } = item;
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="main">
        <DisplayItems items={filteredItems} />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 2rem 5rem;
  background-color: #e8f7fc;
  overflow: auto;

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
