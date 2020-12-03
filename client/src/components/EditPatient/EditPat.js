import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./EditPatient.css";
import { editPatient } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";

const EditPat = (props) => {
  const { className, patient } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const Cond = patient.condition;
  const [condition, setCondition] = useState(Cond);
  const name = patient.name;
  const age = patient.age;
  const Birth = patient.Birth;

  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  if (currentUser) {
    var doctor = currentUser.email;
  }
  const save = () => {
    dispatch(
      editPatient(
        patient.CIN,
        {
          condition,
          name,
          age,
          Birth,
        },
        doctor
      )
    );
    setModal(false);
  };

  return (
    <div>
      <div className="btnShow">
        <Button color="primary" onClick={toggle}>
          Show
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          style={{
            color: "white",
            backgroundColor: "skyblue",
            fontFamily: "sans-serif",
            outline: "none",
            boxShadow: "none",
            display: "flex",
          }}
          toggle={toggle}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3> HEALTH</h3>
            <p>Doctor: {currentUser.email}</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <p>Name : {patient.name}</p>
          <p>Age : {patient.age}</p>
          <p>CIN : {patient.CIN}</p>
          <p>Birth : {patient.Birth}</p>

          <p>Date : {patient.Date}</p>
          <p style={{ marginBottom: 5 }}>Condition :</p>
          <textarea
            cols="90"
            rows="13"
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          ></textarea>
        </ModalBody>
        <ModalFooter className="foot">
          <Button color="primary" onClick={save} className="btnSave">
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditPat;
