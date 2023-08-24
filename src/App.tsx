import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
