import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../style/index.css";

function main() {
  return (
    <div className="content">
      <h1>React Todo List</h1>
      <Footer />
      <br />
      <div className="listBoard">
        <h2>My Tasks </h2>
        <AddTodo />
        <br />
        <hr className="line" />
        <VisibleTodoList />
      </div>
    </div>
  );
}

function login() {
  return (
    <div>
      <h2> </h2>{" "}
    </div>
  );
}

const App = () => (
  <Router>
    <div>
      <ul className="nav">
        <li>
          <Link to="/main"> main </Link>{" "}
        </li>
        <li>
          <Link to="/login"> login </Link>{" "}
        </li>
      </ul>
      <Route exact path="/main" component={main} />{" "}
      <Route path="/login" component={login} />{" "}
    </div>{" "}
  </Router>
);
export default App;
