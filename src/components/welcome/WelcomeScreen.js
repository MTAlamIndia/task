import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { UserName } from '../../actions/index';
import Greeting from "../Greeting";

import "./Welcome.css";

const WelcomeScreen = ({userNameSubmitted}) => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(userName) {
        dispatch(UserName(userName))
        userNameSubmitted()
      }

  }

  return (
    <>
      <div className="welcomeScreen">
        <div className="containerWrapper">
          <h2>
            <Greeting />
          </h2>
          <form className="formGroup" onSubmit={handleSubmit}>
            <label>Please Enter Your Name</label>
            <div className="inputControl">
              <input type="text" onChange={handleChange} name="userName" autoComplete="off" />
              <button type="submit">
                <BsArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
