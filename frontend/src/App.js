import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Register from "pages/Register";

import { store } from "store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
