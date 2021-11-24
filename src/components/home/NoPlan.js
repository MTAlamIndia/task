import { useSelector } from "react-redux";
import Greeting from "../Greeting";
import AddToDoButton from "./AddToDoButton";
import "./NoPlan.css";

const NoPlan = () => {
  const userName = useSelector(state=>state.UserNameReducer.userName)
 
  return (
    <>
      <div className="noPlan">
        <p>
          <Greeting />
          <br />
          {userName}
        </p>
        <div style={{ textAlign: "center", paddingTop: 40 }}>
          <img src="./images/todo.png" alt="To Do" />
          <p style={{ margin: "30px 0 10px", fontWeight: 500 }}>
            You haven't planned yet anything
          </p>
          <p style={{ fontSize: 14 }}>Please add your first task.</p>
        </div>
      </div>
      <AddToDoButton />
    </>
  );
};

export default NoPlan;
