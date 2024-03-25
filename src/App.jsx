import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import "./MediaScreen.css";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <NavBar />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
