import "./App.css";
import "./MediaScreen.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Navigate from "./components/Navigate";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
