import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import DisplayItems from "../components/DisplayItems";
import { useAppContext } from "../context/context";
import Loader from "../components/Loader";

function Items() {
  const { items, itemsLoading, itemsError } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

  let filteredItems = items;
  if (searchQuery !== "") {
    filteredItems = items.filter((item) => {
      const { name } = item;
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  if (itemsError) {
    return (
      <div className="displayError">
        <h1>An error occurred</h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <Header>
        <h1 className="title">
          <span className="textOrange">Shoppingify</span> allows you to take
          your shopping list wherever you go
        </h1>
        <Search>
          <AiOutlineSearch className="icon" />
          <input
            className="input"
            type="search"
            placeholder="search item"
            aria-label="search item"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Search>
      </Header>

      {itemsLoading ? (
        <Loader />
      ) : (
        <main className="main">
          <DisplayItems items={filteredItems} />
        </main>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 5rem;
  background-color: #e8f7fc;
  overflow: auto;

  .displayError {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 750px) {
    padding: 2rem 3rem;
  }
`;

const Header = styled.header`
  display: flex;

  .title {
    margin-top: 0;
    max-width: 850px;
  }

  .textOrange {
    color: orange;
  }

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const Search = styled.div`
  position: relative;
  margin-left: 4rem;

  .input {
    font-size: 1rem;
    padding: 0.8rem 0.5rem 0.8rem 2.5rem;
    min-width: 220px;
    width: 20vw;
  }

  .icon {
    position: absolute;
    font-size: 1.2rem;
    top: 0.75rem;
    left: 0.7rem;
  }

  @media (max-width: 1400px) {
    margin-left: 0;

    .input {
      width: 30vw;
    }
  }
`;

export default Items;
