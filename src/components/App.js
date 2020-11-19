import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";
import RouteConfig from "./router/RouteConfig";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <RouteConfig />

      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default App;
