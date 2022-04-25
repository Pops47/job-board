import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Body">
      <div className="App">
        <Header />
        <Jobs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
