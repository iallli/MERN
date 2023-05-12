import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.css";
import Protected from "./Components/Protected/Protected";
import Error from "./Pages/Error/Error";

function App() {
  const isAuth = false;
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />

            <Route
              path="crypto"
              exact
              element={<div className={styles.main}>Crypto Page</div>}
            />

            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>Blogs Page</div>
                </Protected>
              }
            />

            <Route
              path="submit-blog"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>Submit a Blog Page</div>
                </Protected>
              }
            />

            <Route
              path="log-in"
              exact
              element={<div className={styles.main}>Log-In Page</div>}
            />

            <Route
              path="sign-up"
              exact
              element={<div className={styles.main}>Sign-Up Page</div>}
            />

            <Route
              path="*"
              element={
                <div className="styles.main">
                  <Error />
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
