import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './Register.css'; // Import the CSS file for styling

const Register = ({ addCandidate }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Single'); // Add marital status state
  const [emergencyContact, setEmergencyContact] = useState('');
  const [photo, setPhoto] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [amount, setAmount] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (parseFloat(amount) < 50) {
      setPaymentError('Amount must be more than 50 rupees');
      return;
    }
    
    const newCandidate = {
      name,
      mobile,
      fatherName,
      gender,
      maritalStatus,
      emergencyContact,
      photo,
      aadharCard,
      amount
    };
    addCandidate(newCandidate);
    setIsRegistered(true);
    generateDocument(newCandidate);
  };

  const generateDocument = (candidate) => {
    const doc = new jsPDF();
    doc.text(`Name: ${candidate.name}`, 10, 10);
    doc.text(`Mobile: ${candidate.mobile}`, 10, 20);
    doc.text(`Father's Name: ${candidate.fatherName}`, 10, 30);
    doc.text(`Gender: ${candidate.gender}`, 10, 40);
    doc.text(`Marital Status: ${candidate.maritalStatus}`, 10, 50);
    doc.text(`Emergency Contact: ${candidate.emergencyContact}`, 10, 60);
    doc.text(`Amount: ${candidate.amount}`, 10, 70);
    doc.save('registration-details.pdf');
  };

  const handleDownload = () => {
    const candidate = {
      name,
      mobile,
      fatherName,
      gender,
      maritalStatus,
      emergencyContact,
      photo,
      aadharCard,
      amount
    };
    generateDocument(candidate);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sanwaliya Seth Mitra Mandal Jeeran</h1>
      </div>
      <div className="content">
        <h2>Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="input"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile Number"
              className="input"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">
              {gender === 'Female' && maritalStatus === 'Married' ? "Husband's Name" : "Father's Name"}
            </label>
            <input
              type="text"
              placeholder={gender === 'Female' && maritalStatus === 'Married' ? "Husband's Name" : "Father's Name"}
              className="input"
              onChange={(e) => setFatherName(e.target.value)}
              value={fatherName}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Gender</label>
            <select
              className="select"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label">Marital Status</label>
            <select
              className="select"
              onChange={(e) => setMaritalStatus(e.target.value)}
              value={maritalStatus}
              required
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Emergency Contact Number"
              className="input"
              onChange={(e) => setEmergencyContact(e.target.value)}
              value={emergencyContact}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Passport Size Photo</label>
            <input
              type="file"
              className="input"
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Aadhar Card</label>
            <input
              type="file"
              className="input"
              onChange={(e) => setAadharCard(URL.createObjectURL(e.target.files[0]))}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Payment Amount (in rupees)"
              className="input"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
          </div>
          {paymentError && <p className="error">{paymentError}</p>}
          <button
            type="submit"
            className="button"
          >
            Register and Pay
          </button>
          {isRegistered && <button onClick={handleDownload} className="download-button">Download Document</button>}
        </form>
      </div>
    </div>
  );
};

export default Register;
