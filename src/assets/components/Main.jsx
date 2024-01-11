import React from 'react';
import TreatmentsTable from './TreatmentsTable';
import Welcome from './Welcome';
import AddTreatments from './AddTreatments';

function Main() {
  return (
    <>
        {/* <TreatmentsTable/> */}
        <div className='d-flex flex-column-reverse align-items-center justify-content-center'>
            {/* <Welcome/> */}
            <AddTreatments/>
            <TreatmentsTable/>
        </div>
        
    </>
  )
};

export default Main;
