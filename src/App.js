import { Route, Routes } from "react-router";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";
import ThemeContext from "./contexts/ThemeContext";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <ThemeContext.Provider value={"light"}>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <ToggleBtn />
    </ThemeContext.Provider>
  );
}

export default App;
