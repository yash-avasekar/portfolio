import "./App.css";
import "./MediaScreen.css";
import Main from "./Main";
import Navigate from "./Navigate";

function App() {
  return (
    <div className="App">
      <header>
        <Navigate />
      </header>
      <main className="container">
        <Main />
      </main>
      <footer>
        <p>Designed and developed by Yash Avasekar &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
