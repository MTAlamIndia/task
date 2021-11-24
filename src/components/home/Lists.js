import { useSelector } from "react-redux";
import Header from "../Header";
import AddToDoButton from "./AddToDoButton";
import CategoryList from "./CategoryList";

import "./List.css";
import TaskList from "./TaskList";
import { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Lists = () => {
  const [categorySelected, setCategorySelected] = useState(false);

  const state = useSelector((state) => state);
  const userName = state.UserNameReducer.userName;
  let toDoTask = state.ToDoReducer;

  const fetchCatgory = () => {
    setCategorySelected(true);
  };

  const filteredData = () => {
    const { list, filterTerm } = toDoTask;
    return list.filter((el) => el.data.category === filterTerm);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        {!categorySelected &&  (
          <>
            <Header
              noBack
              subTitle={`Hey, ${userName}`}
              title="Here is your plan"
            />
            <div className="all_lists">
              <CategoryList fetchCatgory={fetchCatgory} />
              <TaskList {...toDoTask} />
            </div>
          </>
        )}

        {categorySelected && (
          <>
            <div className="header">
              <div
                className="backButton"
                onClick={() => setCategorySelected(false)}
              >
                <HiOutlineArrowNarrowLeft />
              </div>
              <h2 className="head">{toDoTask.filterTerm}</h2>
              <div style={{ paddingTop: 30 }}>
                <TaskList list={filteredData()} />
              </div>
            </div>
          </>
        )}
      </div>
      <AddToDoButton />
    </>
  );
};

export default Lists;
