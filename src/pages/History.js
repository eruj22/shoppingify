import React from "react";
import styled from "styled-components";
import HistoryList from "../components/HistoryList";
import { useHistoryContext } from "../context/history_context";

function History() {
  const { historyLists } = useHistoryContext();

  return (
    <Wrapper>
      <h1>Shopping history</h1>
      {historyLists.map((list) => {
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
`;

export default History;
