import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../src/Store/store";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Table />{" "}
    </div>
  );
}

export default connect()(App);
