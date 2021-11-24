import "./App.css";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router-dom";
import AddToDo from "./components/addToDo/AddToDo";


const App = () => {
  return (
    <>
      <div className="container">
        <div className="containerBox">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/add`}>
              <AddToDo />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
