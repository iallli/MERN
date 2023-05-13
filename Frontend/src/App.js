import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.css";
import Protected from "./Components/Protected/Protected";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { useSelector } from "react-redux";
import Crypto from "./Pages/Crypto/Crypto";
import Blog from "./Pages/Blog/Blog";

function App() {
  const isAuthenticated = useSelector((state) => state.user.auth);
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
              element={
                <div className={styles.main}>
                  <Crypto />
                </div>
              }
            />

            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuthenticated}>
                  <div className={styles.main}>
                    <Blog />
                  </div>
                </Protected>
              }
            />

            <Route
              path="submit-blog"
              exact
              element={
                <Protected isAuth={isAuthenticated}>
                  <div className={styles.main}>Submit a Blog Page</div>
                </Protected>
              }
            />

            <Route
              path="log-in"
              exact
              element={
                <div className={styles.main}>
                  <Login />
                </div>
              }
            />

            <Route
              path="sign-up"
              exact
              element={
                <div className={styles.main}>
                  <Signup />
                </div>
              }
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
