import React, { useState } from "react";
import styled from "styled-components";
import HistoryList from "../components/HistoryList";
import Select from "../components/Select";
import { useHistoryContext } from "../context/history_context";

function History() {
  const { historyLists } = useHistoryContext();
  const [filterLists, setFilterLists] = useState(historyLists);

  const handleChange = (event) => {
    const selected = event.target.value;
    const statuses = ["active", "completed", "cancelled"];

    statuses.forEach((status) => {
      if (selected === status) {
        const filteredStatus = historyLists.filter(
          (list) => list.status === status
        );
        setFilterLists(filteredStatus);
      }
    });

    if (selected === "all") {
      setFilterLists(historyLists);
    }
  };

  return (
    <Wrapper>
      <Header>
        <h1>Shopping history</h1>

        <Select onChange={(event) => handleChange(event)} />
      </Header>
      {filterLists.map((list) => {
        return <HistoryList key={list._id} {...list} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 5rem;
  background-color: #e8f7fc;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

export default History;
