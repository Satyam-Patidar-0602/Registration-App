import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './Candidates.css'; // Import custom CSS

const Candidates = ({ candidates }) => {
  const [selectedAadhar, setSelectedAadhar] = useState(null);

  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(candidates);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'candidates.xlsx');
  };

  return (
    <div className="candidates-container">
      <div className="header">
        <h1>Sanwaliya Seth Mitra Mandal Jeeran</h1>
      </div>
      <div className="candidates-content">
        <h2>Registered Candidates</h2>
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Emergency Contact</th>
              <th>Aadhaar Card</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.photo} alt="passport" className="candidate-photo" />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.fatherName}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.mobile}</td>
                <td>{candidate.emergencyContact}</td>
                <td>
                  <button
                    onClick={() => setSelectedAadhar(selectedAadhar === candidate.aadharCard ? null : candidate.aadharCard)}
                    className="preview-btn"
                  >
                    {selectedAadhar === candidate.aadharCard ? 'Hide Aadhar Card' : 'Preview Aadhar Card'}
                  </button>
                  {selectedAadhar === candidate.aadharCard && (
                    <div className="aadhar-preview">
                      <img src={candidate.aadharCard} alt="Aadhar Card" className="aadhar-card-img" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleExportToExcel} className="export-btn">
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default Candidates;
