import { Route, Routes } from "react-router";
import ReviewPage from "./pages/ReviewPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReviewPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
