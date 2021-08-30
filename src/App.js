import React from "react";

// route
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={List} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Detail" component={Detail} />
      </BrowserRouter>
    </>
  );
}

export default App;
