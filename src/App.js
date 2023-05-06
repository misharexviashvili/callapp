import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import PieChart from "./components/PieChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/piechart" element={<PieChart />} />
      </Routes>
    </Router>
  );
}

export default App;
