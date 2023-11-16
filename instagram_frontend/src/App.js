
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";

import Createpost from "./components/CreatePost/Createpost";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="createpost"element={<Createpost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
