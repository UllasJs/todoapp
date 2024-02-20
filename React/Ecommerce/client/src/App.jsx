import "./App.css";
import Login from "./component/admin/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/admin/signup/signup";
import HomeAdmin from "./component/admin/home/home";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [isAdminLogged, setAdminLogged] = useState(false);
  const [storedToken, setStoredToken] = useState("");
  // const [userToken, setUserToken] = useState("");

  
  useEffect(() => {
    setStoredToken(Cookies.get("userToken"));
    // Retrieve the token from the cookie

    if (storedToken) {
      // If the token exists in the cookie, set it in the state
      setAdminLogged(true);
    }
  }, [storedToken]);

  return (
    <Router>
      <Routes>
        <Route path="/admin/signup" element={<SignUp />}></Route>
        <Route
          path="/admin"
          element={
            isAdminLogged ? (
              <HomeAdmin
                storedToken={storedToken}
                setStoredToken={setStoredToken}
              />
            ) : (
              <Login setStoredToken={setStoredToken} />
            )
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
