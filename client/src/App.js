import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import { getPatient } from "./redux/actions/actions";
import PatientCard from "./components/PatientCard/PatientCard";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Signup from "./components/Auth/Signup";
import AddPatient from "./components/AddPatient/AddPatient";
import SearchPatient from "./components/SearchPatient/SearchPatient";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

function App() {
  const { currentUser } = useAuth();

  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);

  if (currentUser) {
    var doctor = currentUser.email;
  }
  useEffect(() => {
    dispatch(getPatient(doctor));
  }, [doctor]);
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>

          <PrivateRoute
            path="/addPatient"
            component={AddPatient}
          ></PrivateRoute>

          <PrivateRoute
            path="/patientList"
            render={() => (
              <div>
                <div>
                  <SearchPatient search={search} setSearch={setSearch} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  {patients &&
                    patients
                      .filter((patient) =>
                        patient.name
                          .toLowerCase()
                          .includes(search.toLowerCase().trim())
                      )
                      .map((patient) => <PatientCard patient={patient} />)}
                </div>
              </div>
            )}
          ></PrivateRoute>
          <Route path="/Signup" component={Signup}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/forgot-password" component={ForgotPassword}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
