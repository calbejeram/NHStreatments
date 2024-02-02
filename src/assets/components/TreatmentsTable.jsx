import React, { useState } from 'react';
import NoTreatmentsAdded from './NoTreatmentsAdded';
import Swal from 'sweetalert2';
import EditTreatmentModal from './EditTreatmentModal';

function TreatmentsTable() {
  const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const treatmentsData = localStorage.getItem("TreatmentForm") ? JSON.parse(localStorage.getItem("TreatmentForm")) : [];

  let dateRows = {};

  treatmentsData.forEach((info) => {
    if (!dateRows[info.treatmentDate]) {
      dateRows[info.treatmentDate] = [];
    }
    dateRows[info.treatmentDate].push(info);
  });

  const handleClearAll = () => {
    Swal.fire({
      title: "Are you sure to clear all your treatments?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "All treatments have been cleared!",
          icon: "success"
        });
        localStorage.removeItem("TreatmentForm");
        window.location.reload();
      }
    });
  };

  const handleEdit = (index) => {
    setSelectedTreatmentIndex(index);
    setShowEditModal(true);
  };

  const handleEditSave = (editedData) => {
    const updatedTreatments = [...treatmentsData];
    updatedTreatments[selectedTreatmentIndex] = editedData;
    localStorage.setItem("TreatmentForm", JSON.stringify(updatedTreatments));

    setShowEditModal(false);
    setSelectedTreatmentIndex(null);

    Swal.fire({
        icon: "success",
        title: "Treatment Updated",
        text: "Your treatment has been updated.",
        showConfirmButton: false,
        timer: 1100
      });
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedTreatmentIndex(null);
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure to delete this treatment?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The treatment has been deleted!",
          icon: "success"
        });
        const updatedTreatments = treatmentsData.filter((_, i) => i !== index);
        localStorage.setItem("TreatmentForm", JSON.stringify(updatedTreatments));
        window.location.reload();
      }
    });
  };

  const overallCommission = treatmentsData.reduce((total, info) => total + parseFloat(info.serviceCommission || 0), 0);
  const overallTip = treatmentsData.reduce((total, info) => total + parseFloat(info.clientTip || 0), 0);
  const totalCombined = overallCommission + overallTip;

  return (
    <>
      <div className={`mb-1 d-flex align-items-end justify-content-end w-100 ${treatmentsData.length <= 0 ? 'd-none' : 'd-block'}`}>
        <button className="btn btn-danger" onClick={handleClearAll}>
          <i className="bi bi-trash me-2"></i>
          Clear All
        </button>
      </div>
      <div className="mb-1 d-flex align-items-end justify-content-end w-100">
        <p className="fw-bold bg-primary bg-opacity-50 rounded-3 p-2 border border-dark small">
          <i className="bi bi-cash-stack me-2"></i>Total Earnings: ₱ {totalCombined.toFixed(2)}
        </p>
      </div>
      <div className="mb-3 d-flex align-items-end justify-content-end w-100">
        <p className="me-2 fw-bold bg-danger bg-opacity-50 rounded-3 p-2 border border-dark m-0 small">
          <i className="bi bi-cash-stack me-2"></i>Commission: ₱ {overallCommission.toFixed(2)}
        </p>
        <p className="fw-bold bg-success bg-opacity-50 rounded-3 border border-dark p-2 m-0 small">
          <i className="bi bi-cash me-2"></i>Tip: ₱ {overallTip.toFixed(2)}
        </p>
      </div>
      <table className="table text-center border border-dark">
        <thead>
          <tr>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-calendar me-2"></i>Date (Day)
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-hash me-2"></i>Number
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-person-fill me-2"></i>Name
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-box2-heart me-2"></i>Service
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-cash-stack me-2"></i>Commission
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-cash me-2"></i>Tip
            </th>
            <th className="align-middle bg-success bg-opacity-75 text-white small">
              <i className="bi bi-gear me-2"></i>Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {treatmentsData.length <= 0 ? (
            <tr>
              <td colSpan="7">
                <NoTreatmentsAdded />
              </td>
            </tr>
          ) : (
            treatmentsData.map((info, index) => (
              <tr key={index}>
                {index === 0 || info.treatmentDate !== treatmentsData[index - 1].treatmentDate ? (
                  <td rowSpan={dateRows[info.treatmentDate].length} className="fw-bold bg-success bg-opacity-50 small border border-dark">
                    {`${new Date(info.treatmentDate).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' })} (${new Date(info.treatmentDate).toLocaleDateString('en-US', { weekday: 'short' })})`}
                  </td>
                ) : null}
                <td className="align-middle bg-success bg-opacity-25 small">{info.clientNumber}</td>
                <td className="align-middle text-uppercase bg-success bg-opacity-25 small">{info.clientName}</td>
                <td className="align-middle text-uppercase bg-success bg-opacity-25 small">{info.servicePackage}</td>
                <td className="align-middle fw-bold text-danger bg-success bg-opacity-25 small">{`₱ ${info.serviceCommission}`}</td>
                <td className="align-middle fw-bold text-success bg-success bg-opacity-25 small">{`₱ ${info.clientTip}`}</td>
                <td className="align-middle fw-bold text-success bg-success bg-opacity-25 small">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showEditModal && selectedTreatmentIndex !== null && (
        <EditTreatmentModal
          treatmentData={treatmentsData[selectedTreatmentIndex]}
          onSave={handleEditSave}
          onClose={handleEditClose}
        />
      )}
    </>
  );
}

export default TreatmentsTable;
