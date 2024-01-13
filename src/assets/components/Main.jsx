import React from 'react';
import TreatmentsTable from './TreatmentsTable';
import AddTreatments from './AddTreatments';

function Main() {
  return (
    <>
        <div className='d-flex flex-column-reverse align-items-center justify-content-center'>
            <AddTreatments/>
            <TreatmentsTable/>
        </div>  
    </>
  )
};

export default Main;
