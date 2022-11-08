import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import SendEmail from "../pages/SendEmail/SendEmail";
import NewPassword from "../pages/NewPassword/NewPassword";
import MyAccount from "../pages/MyAccount/MyAccount";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import NotFound from "../pages/NotFound/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.css";

const App = () => {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
