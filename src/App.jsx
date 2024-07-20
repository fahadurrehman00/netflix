import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerScreen from "./screens/playerScreen/PlayerScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SignupScreen from "./screens/signupScreen/SignupScreen";
import SigninScreen from "./screens/signinScreen/SigninScreen";
import Browse from "./screens/browseScreen/Browse";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupScreen />} />
        <Route path="/login" element={<SigninScreen />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/netflix" element={<HomeScreen />} />
        <Route
          path="/playerScreen/:videoSrc/:title"
          element={<PlayerScreen />}
        />
      </Routes>
    </Router>
  );
};

export default App;
