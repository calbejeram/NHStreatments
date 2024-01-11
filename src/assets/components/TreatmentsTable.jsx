import React from 'react';
import { Stack } from 'react-bootstrap';

function TreatmentsTable() {
    const treatmentsData = localStorage.getItem("TreatmentForm") ? JSON.parse(localStorage.getItem("TreatmentForm")) : [];

    let dateRows = {};

    treatmentsData.forEach((info) => {
        if (!dateRows[info.treatmentDate]) {
            dateRows[info.treatmentDate] = [];
        }
        dateRows[info.treatmentDate].push(info);
    });

    const overallCommission = treatmentsData.reduce((total, info) => total + parseFloat(info.serviceCommission || 0), 0);
    const overallTip = treatmentsData.reduce((total, info) => total + parseFloat(info.clientTip || 0), 0);
    const totalCombined = overallCommission + overallTip;

    return (
        <>
            <div className="mb-1 d-flex align-items-end justify-content-end w-100">
                 <p class="fw-bold bg-primary bg-opacity-50 rounded-3 p-2 border border-dark"><i class="bi bi-cash-stack me-2"></i>Total Earnings: ₱ {totalCombined.toFixed(2)}</p>
            </div>
            <div className="mb-3 d-flex align-items-end justify-content-end w-100">
                 <p class="me-2 fw-bold bg-danger bg-opacity-50 rounded-3 p-2 border border-dark m-0"><i class="bi bi-cash-stack me-2"></i>Commission: ₱ {overallCommission.toFixed(2)}</p>
                 <p class=" fw-bold bg-success bg-opacity-50 rounded-3 border border-dark p-2 m-0"><i class="bi bi-cash me-2"></i>Tip: ₱ {overallTip.toFixed(2)}</p>
            </div>
            <table className="table text-center border">
                <thead>
                    <tr>
                        {/* <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-calendar me-2"></i>Date</th> */}
                        <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-hash me-2"></i>Number</th>
                        <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-person-fill me-2"></i>Name</th>
                        <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-box2-heart me-2"></i>Service</th>
                        <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-cash-stack me-2"></i>Commission</th>
                        <th className="align-middle bg-success bg-opacity-75 text-white"><i class="bi bi-cash me-2"></i>Tip</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(dateRows).map((date, index) => {
                        const rows = dateRows[date];
                        return rows.map((info, rowIndex) => (
                            <tr key={`${index}-${rowIndex}`}>
                                {/* {rowIndex === 0 && (
                                    <td rowSpan={rows.length} className="align-middle fw-bold bg-success bg-opacity-25">
                                        {info.treatmentDate}
                                    </td>
                                )} */}
                                <td className="align-middle bg-success bg-opacity-25">{info.clientNumber}</td>
                                <td className="align-middle text-uppercase bg-success bg-opacity-25">{info.clientName}</td>
                                <td className="align-middle text-uppercase bg-success bg-opacity-25">{info.servicePackage}</td>
                                <td className="align-middle fw-bold text-danger bg-success bg-opacity-25">{`₱ ${info.serviceCommission}`}</td>
                                <td className="align-middle fw-bold text-success bg-success bg-opacity-25">{`₱ ${info.clientTip}`}</td>
                            </tr>
                        ));
                    })}
                </tbody>
            </table>
        </>
    );
}

export default TreatmentsTable;
