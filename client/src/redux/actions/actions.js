import { GET_PATIENTS } from "./actionTypes";
import axios from "axios";

export const getPatient = (doctor) => (dispatch) => {
  axios
    .get(`/api/patient/list/${doctor}`)
    .then((res) => dispatch({ type: GET_PATIENTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addPatient = (newPatient, doctor) => (dispatch) => {
  axios
    .post("/api/patient/newPatient", newPatient)
    .then((res) => dispatch(getPatient(doctor)))
    .catch((err) => console.log(err));
};

export const editPatient = (idPatient, editedPatient, doctor) => (dispatch) => {
  axios
    .put(`/api/patient/${idPatient}`, editedPatient)
    .then((res) => dispatch(getPatient(doctor)))
    .catch((err) => console.log(err));
};

export const deletePatient = (idPatient, doctor) => (dispatch) => {
  axios
    .delete(`/api/patient/delete/${idPatient}`)
    .then((res) => dispatch(getPatient(doctor)))
    .catch((err) => console.log(err));
};
