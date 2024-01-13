import React from 'react';
import { Stack } from 'react-bootstrap';

const AddTreatmentForm = ({clientNumber, handleClientNumber, clientName, handleClientName, servicePackage, handleServicePackage, serviceCommission, handleServiceCommission, clientTip, handleClientTip, handleSubmit, treatmentDate, handleTreatmentDate, handleClear}) => {
  return (
    <>
        <form onSubmit={handleSubmit} >
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-calendar me-2"></i>Select Date: <span className='text-danger fw-bold'>*</span></label>
                <input type="date" name='date' for="date" class="form-control w-100 rounded-0" value={treatmentDate} onChange={handleTreatmentDate} required/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-hash me-2"></i>Client Number: <span className='text-danger fw-bold'>*</span></label>
                <input type="number" class="form-control w-100 rounded-0" min={0} value={clientNumber} onChange={handleClientNumber} required/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-person-fill me-2"></i>Client Name: <span className='text-danger fw-bold'>*</span></label>
                <input type="text" class="form-control w-100 rounded-0" value={clientName} onChange={handleClientName} required/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-box2-heart me-2"></i>Service Package: <span className='text-danger fw-bold'>*</span></label>
                <input type="text" class="form-control w-100 rounded-0" value={servicePackage} onChange={handleServicePackage} required/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-cash-stack me-2"></i>Service Commission: <span className='text-danger fw-bold'>*</span></label>
                <input type="number" class="form-control w-100 rounded-0" min={0} value={serviceCommission} onChange={handleServiceCommission} required/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold"><i class="bi bi-cash me-2"></i>Client Tip: <span className='text-danger fw-bold'>*</span></label>
                <input type="number" class="form-control w-100 rounded-0" min={0} value={clientTip} onChange={handleClientTip} required/>
            </div>
            <div className='d-flex flex-row'>
                <Stack gap={2} className="d-flex flex-row">
                    <button type='submit' className='btn btn-success w-50'><i class="bi bi-person-fill-add me-2"></i>Add</button>
                    <button type='button' onClick={handleClear} className='btn btn-danger w-50'><i class="bi bi-arrow-counterclockwise me-2"></i>Reset</button>
                </Stack>
            </div>
        </form>
    </>
  )
}

export default AddTreatmentForm;
