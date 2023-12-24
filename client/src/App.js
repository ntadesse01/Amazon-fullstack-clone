import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from './Payment';
import Login from "./Login";
import Checkout from "./Checkout";
import Orders from "./Orders";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_51NctanLx0gsR7F7OC8kR8SlvwO09Lc6HJ1zrCg6Yfv02m2kcN00eGR4eD2x1Fld11UDHP8QABeWPKQVcsyczk96900TOuE8pCi")

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
                <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={ promise} >
              <Payment />
            </Elements>
              </>
            }
          />

<Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
             
            </>
          }
        />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
