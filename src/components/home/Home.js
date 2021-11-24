import { useState } from "react";
import WelcomeScreen from "../welcome/WelcomeScreen";
import Lists from "./Lists";
import NoPlan from "./NoPlan";

import { useSelector } from "react-redux";

const Home = () => {
  const [isuserNameSubmitted, setIsUserNameSubmitted] = useState(false);

  const userNameSubmitted = () => {
    setIsUserNameSubmitted(true);
  };
  const user_name = useSelector(state=>state.UserNameReducer);
  const to_do_list = useSelector(state=>state.ToDoReducer.list);
  

  return (
    <>
      {(!user_name && !isuserNameSubmitted) && (
        <WelcomeScreen userNameSubmitted={userNameSubmitted} />
      )}
      {user_name && (!to_do_list || to_do_list.length <= 0) && <NoPlan />}
      {user_name && to_do_list.length > 0 && <Lists />}
    </>
  );
};

export default Home;
