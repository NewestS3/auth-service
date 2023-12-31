import React from 'react';
import Login from './components/login/login';
// import Homepage from "./components/homepage/homepage";
import Registration from "./components/registration/registration";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.constants";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path={routes.ROOT} element={<Login />} />
        {/* <Route path={routes.DASHBOARD} element={<Homepage />} /> */}
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTRATION} element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
