import React, { useState, useEffect } from 'react';
import AddTreatmentForm from './AddTreatmentForm';
import Swal from 'sweetalert2';
import { Modal, Button } from 'react-bootstrap';

function AddTreatments() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [treatmentDate, setTreatmentDate] = useState("");
    const [clientNumber, setClientNumber] = useState("");
    const [clientName, setClientName] = useState("");
    const [servicePackage, setServicePackage] = useState("");
    const [serviceCommission, setServiceCommission] = useState("");
    const [clientTip, setClientTip] = useState("");

    const handleTreatmentDate = (event) => {
        setTreatmentDate(event.target.value);
    };
    const handleClientNumber = (event) => {
        setClientNumber(event.target.value);
    };
    const handleClientName = (event) => {
        setClientName(event.target.value);
    };
    const handleServicePackage = (event) => {
        setServicePackage(event.target.value);
    };
    const handleServiceCommission = (event) => {
        setServiceCommission(event.target.value);
    };
    const handleClientTip = (event) => {
        setClientTip(event.target.value);
    };

    const treatmentsData = localStorage.getItem("TreatmentForm") ? JSON.parse(localStorage.getItem("TreatmentForm")) : [];
    const [treatmentArray, setTreatmentArray] = useState(treatmentsData)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (treatmentDate !== "" && clientNumber > 0 && clientName !== "" && servicePackage !== "" && serviceCommission > 0 && clientTip >= 0) {
            const treatment = { treatmentDate, clientNumber, clientName, servicePackage, serviceCommission, clientTip };

            Swal.fire({
                title: "Add this to your treatments?",
                html: `<div><strong>Treatment Details:</strong></div>
            <div>Date: <strong>${treatment.treatmentDate}</strong></div>
            <div>Client Number: <strong>${treatment.clientNumber}</strong></div>
            <div>Client Name: <strong>${treatment.clientName}</strong></div>
            <div>Service Package: <strong>${treatment.servicePackage}</strong></div>
            <div>Service Commission: <strong>${treatment.serviceCommission}</strong></div>
            <div>Client Tip: <strong>${treatment.clientTip}</strong></div>`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, add it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    setTreatmentArray([...treatmentArray, treatment]);
                    setTreatmentDate("");
                    setClientNumber("");
                    setClientName("");
                    setServicePackage("");
                    setServiceCommission("");
                    setClientTip("");
                    Swal.fire({
                        title: "Treatment Added!",
                        text: "You successfully added a new treatment.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                };
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Don't leave empty form!",
                text: "Please fill out all the required fields!",
            });
        }
    };

    const handleClear = () => {
        setTreatmentDate("");
        setClientNumber("");
        setClientName("");
        setServicePackage("");
        setServiceCommission("");
        setClientTip("");
    };


    useEffect(() => {
        localStorage.setItem("TreatmentForm", JSON.stringify(treatmentArray))
    }, [treatmentArray]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Treatment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddTreatmentForm
                        treatmentDate={treatmentDate}
                        clientNumber={clientNumber}
                        clientName={clientName}
                        servicePackage={servicePackage}
                        serviceCommission={serviceCommission}
                        clientTip={clientTip}
                        handleTreatmentDate={handleTreatmentDate}
                        handleClientNumber={handleClientNumber}
                        handleClientName={handleClientName}
                        handleServicePackage={handleServicePackage}
                        handleServiceCommission={handleServiceCommission}
                        handleClientTip={handleClientTip}
                        handleSubmit={handleSubmit}
                        handleClear={handleClear}
                    />
                </Modal.Body>
            </Modal>

            <Button variant="success" onClick={handleShow}>
                <i class="bi bi-person-fill-add me-2" style={{ fontSize: "2rem" }}></i>
                <p>Add Treatment</p>
            </Button>
        </>
    )
};

export default AddTreatments;
