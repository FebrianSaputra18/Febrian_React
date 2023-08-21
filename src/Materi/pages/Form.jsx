import React, { useState } from "react";
import Modal from "../Component/UI/Modal";
import "../Styles/form.css";

const Form = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    powerUser: '',
    posisi: '',
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (event) => {
    const { name, value, label } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const option = [
    { value: "navigator", label: "Navigator" },
    { value: "pengemudi", label: "Pengemudi" },
    { value: "koki", label: "Koki" },
    { value: "wakil kapten", label: "Wakil Kapten" },
    { value: "penembak jitu", label: "Penembak Jitu" },
    { value: "arkeolog", label: "Arkeolog" },
    { value: "Dokter", label: "Dokter" },
    { value: "pemusik", label: "Pemusik" },
    { value: "kapten", label: "Kapten" },
  ];

  let displayMessage;
  if (selectedOption === "option1") {
    displayMessage = "Kamu pengguna Haki";
  } else if (selectedOption === "option2") {
    displayMessage = "Kamu pengguna Buah Iblis";
  } else if (selectedOption === "option3") {
    displayMessage = "Kamu Lemah";
  } else {
    displayMessage = "Please select an option";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <p>Pilih Pengguna :</p>
        <div>
          <input
            type="radio"
            id="option1"
            name="radioOptions"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">Haki</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            name="radioOptions"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">Buah Iblis</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            name="radioOptions"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          <label htmlFor="option3">Normal</label>
        </div>
        <div>
        <select name="posisi" onChange={handleInputChange}>
          <option>Please choose one option</option>
          {option.map((option, index) => {
            return (
              <option  value={option.value} key={index}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
        <button type="submit">Submit</button>
      </form>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>Submission Successful!</h2>
        <p>Name: {formData.name}</p>
        <p>address: {formData.address}</p>
        <p>Power: {displayMessage}</p>
        <p>posisi: {formData.posisi}</p>
      </Modal>
    </div>
  );
};

export default Form;
