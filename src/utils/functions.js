import toast from "react-hot-toast";
import { AiOutlineCheck } from "react-icons/ai";

export const filterByCategory = (array, category) => {
  return array.filter((item) => item.category === category);
};

export const getUniqueCategories = (array) => {
  return [...new Set(array.map((item) => item.category))];
};

export const notifySuccess = (text) =>
  toast(
    <span>
      <b>{text}</b>
    </span>,
    {
      icon: <AiOutlineCheck />,
    },
    {
      duration: 4000,
      position: "top-center",
      icon: "👏",
    }
  );

export const convertDate = (date) => {
  const newDate = new Date(date);

  const dayNumber = newDate.getDay();

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  return `${days[dayNumber]} ${newDate
    .toLocaleDateString("en-GB")
    .replaceAll("/", ".")}`;
};
