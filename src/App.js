import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import Adduser from "./component/Adduser";
import Updateuser from "./component/Updateuser";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact  path='/' element={<Home  />} />
          <Route exact  path='/add' element={<Adduser  />} />
          <Route exact  path='/update' element={<Updateuser  />} />
          </Routes>
      </Router>
  );
}

export default App;