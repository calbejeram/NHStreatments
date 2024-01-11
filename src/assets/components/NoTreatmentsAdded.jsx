import React from 'react';

function NoTreatmentsAdded() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <div className="">
              <i class="bi bi-person-fill-x" style={{ fontSize: "2rem"}}></i>
              <h3>No Treatments Added</h3>
              <p className="small">Please add any treatment to display here.</p>
            </div>
        </div>
    </>
  )
};

export default NoTreatmentsAdded;
