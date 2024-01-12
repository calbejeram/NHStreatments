import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';


function EditTreatmentModal({ treatmentData, onSave, onClose }) {
  const [editedData, setEditedData] = useState({ ...treatmentData });

  useEffect(() => {
    // Reset the edited data when the modal is opened with new data
    setEditedData({ ...treatmentData });
  }, [treatmentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedData);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Treatment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {Object.entries(editedData).map(([key, value]) => (
            <div key={key} className="mb-3">
              <label htmlFor={key} className="form-label fw-bold">
                {key
                  .split('_')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </label>
              <input
                type="text"
                className="form-control"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button variant="success" type="submit">
            <i class="bi bi-floppy2 me-2"></i>Update Treatment
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTreatmentModal;
