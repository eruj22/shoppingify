import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useHistoryContext } from "../context/history_context";
import DisplayDate from "./DisplayDate";
import DisplayItems from "./DisplayItems";
import BtnSecondary from "./BtnSecondary";
import Modal from "./Modal";
import Select from "./Select";

function HistorySingleList() {
  const { historyLists, historyLoading, changeStatus, deleteList } =
    useHistoryContext();
  const [isModalDeleteList, setIsModalDeleteList] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const singleList = historyLists.find((list) => list._id === id);
  const { name, status, updatedAt, items } = singleList;

  if (historyLoading) {
    return <h2>Loading...</h2>;
  }

  const openModal = () => setIsModalDeleteList(true);
  const closeModal = () => setIsModalDeleteList(false);

  const onChange = (event) => {
    const status = event.target.value;
    changeStatus(id, status);
  };

  const handleDelete = () => {
    deleteList(id);
    navigate("/history");
  };

  return (
    <Wrapper>
      <Modal
        onClick={handleDelete}
        isOpen={isModalDeleteList}
        close={closeModal}
        text="Do you really want to delete shopping list?"
      />

      <Link to="/history" className="back">
        <BsArrowLeft className="back__icon" />
        back
      </Link>

      <div className="flex">
        <h2 className="name">{name}</h2>

        <BtnSecondary text="delete list" onClick={openModal} />

        <Select onChange={onChange} value={status} />
      </div>
      <DisplayDate date={updatedAt} />
      <DisplayItems items={items} singleList={singleList} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 5rem;
  background-color: #e8f7fc;
  overflow: auto;

  .name {
    margin-right: auto;
  }

  .back {
    display: flex;
    align-items: center;
    color: orange;
    width: fit-content;
    padding: 0.5rem 0;

    &__icon {
      margin-right: 0.5rem;
    }
  }

  .flex {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    .name {
      margin-bottom: 0.5rem;
    }

    .flex {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
  }
`;

export default HistorySingleList;
