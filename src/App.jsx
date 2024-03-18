import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import "./MediaScreen.css";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
