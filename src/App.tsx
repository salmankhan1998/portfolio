import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContent from "./components/AppContent/AppContent";

import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <AppContent></AppContent>
      <Footer></Footer>
    </>
  );
}

export default App;
