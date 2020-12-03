import React from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deletePatient } from "../../redux/actions/actions";
import "./PatientCard.css";
import EditPat from "../EditPatient/EditPat";
import { useAuth } from "../../contexts/AuthContext";

const PatientCard = ({ patient }) => {
  const dispatch = useDispatch();

  const { currentUser } = useAuth();

  if (currentUser) {
    var doctor = currentUser.email;
  }
  const confirmation = () => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      dispatch(deletePatient(patient.CIN, doctor));
    }
  };

  return (
    <div className="cnt">
      <Card body style={{ width: 220 }}>
        <div className="card-back"></div>
        <CardText className="avatar">{patient.name[0]} </CardText>

        <CardTitle style={{ textAlign: "center" }}>{patient.name}</CardTitle>
        <CardText style={{ textAlign: "center" }}>{patient.CIN}</CardText>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="btn">
            <EditPat patient={patient} />
            <Button
              color="danger"
              onClick={confirmation}
              style={{ marginLeft: 30, marginRight: 110 }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientCard;
