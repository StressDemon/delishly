import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Categories />
      </div>
    </div>
  );
}

export default App;
