import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./components/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
