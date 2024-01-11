import React from 'react';

const AddTreatmentForm = ({clientNumber, handleClientNumber, clientName, handleClientName, servicePackage, handleServicePackage, serviceCommission, handleServiceCommission, clientTip, handleClientTip, handleSubmit, treatmentDate, handleTreatmentDate, handleClear}) => {
  return (
    <>
        <form onSubmit={handleSubmit} >
            <div class="input-group mb-3 d-flex flex-column">
                <i class="bi bi-calendar2-plus-fill me-2"></i>
                Select Date
                <input type="date" name='date' for="date" class="form-control w-100 rounded-0" value={treatmentDate} onChange={handleTreatmentDate}/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Client Number:</label>
                <input type="number" class="form-control w-100 rounded-0" value={clientNumber} onChange={handleClientNumber}/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Client Name:</label>
                <input type="text" class="form-control w-100 rounded-0" value={clientName} onChange={handleClientName}/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Service Package:</label>
                <input type="text" class="form-control w-100 rounded-0" value={servicePackage} onChange={handleServicePackage}/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Service Commission:</label>
                <input type="number" class="form-control w-100 rounded-0" value={serviceCommission} onChange={handleServiceCommission}/>
            </div>
            <div class="input-group mb-3 d-flex flex-column">
                <label for="exampleFormControlInput1" class="form-label fw-bold">Client Tip:</label>
                <input type="number" class="form-control w-100 rounded-0" value={clientTip} onChange={handleClientTip}/>
            </div>
            <div className='d-flex flex-row'>
                <button type='submit' className='btn btn-primary'>Add</button>
                <button type='button' onClick={handleClear} className='btn btn-danger'>Clear</button>
            </div>
        </form>
    </>
  )
}

export default AddTreatmentForm;
