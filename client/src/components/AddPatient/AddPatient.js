import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../../redux/actions/actions";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./AddPAtient.css";

const AddPatient = () => {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [CIN, setCIN] = useState("");
  const [Birth, setBirth] = useState("");
  const [condition, setCondition] = useState("");
  const doctor = currentUser.email;
  const dispatch = useDispatch();

  const addP = () => {
    if (!name || !CIN || !condition) {
      alert("information required");
    }
    dispatch(addPatient({ doctor, name, age, CIN, Birth, condition }, doctor));
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Patient</h1>
        <form>
          <div className="doctor">
            <label htmlFor="doctor"> Doctor : {currentUser.email}</label>
          </div>
          <div className="name">
            <label htmlFor="name"> Name</label>
            <input
              placeholder=" enter the patient name..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="age">
            <label htmlFor="age">Age</label>
            <input
              placeholder="enter ur age..."
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="CIN">
            <label htmlFor="CIN">CIN</label>
            <input
              placeholder="patient CIN..."
              type="number"
              value={CIN}
              onChange={(e) => setCIN(e.target.value)}
            />
          </div>
          <div className="Birth">
            <label htmlFor="Birth">Birth</label>
            <input
              placeholder="patient Birth..."
              type="text"
              value={Birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>
          <div className="condition">
            <label htmlFor="condition">Condition</label>
            <textarea
              cols="53.8"
              rows="8"
              placeholder="patient condition..."
              type="text"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            ></textarea>
          </div>
          <div className="createPatient">
            <Link to="/patientList">
              {" "}
              <button type="submit" onClick={addP}>
                Create Patient
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
