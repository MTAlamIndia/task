import { useSelector } from "react-redux";
import Header from "../Header";

import "./AddToDo.css";
import AddToDoForm from "./AddToDoForm";

const AddToDo = () => {
  const userName = useSelector((state) => state.UserNameReducer.userName);

  return (
    <>
      <div className="addToDoContainer">
        <Header subTitle={`Hey, ${userName}`} title="What's your plan?" />
        <AddToDoForm />
      </div>
    </>
  );
};

export default AddToDo;
