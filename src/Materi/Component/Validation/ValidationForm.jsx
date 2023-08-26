import React, { useState } from "react";
import "./form.css";

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    power: "",
    posisi: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    power: "",
    posisi: "",
  });
  const option = [
    { value: "", label: "Please choose one option" },
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

  const validateName = () => {
    if (formData.name.trim() === "") {
      return "*Name is required.";
    }
    return "";
  };

  const validateEmail = () => {
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "*Invalid email address.";
    }
    return "";
  };

  const validatePassword = () => {
    if (formData.password.length < 6) {
      return "*Password must be at least 6 characters.";
    }
    return "";
  };
  console.log(formData);

  const validateCheckBox = () => {
    if (formData.power === "") {
      return "*Chose is your power now !";
    }
    return "";
  };
  const validateSelect = () => {
    if (option.value === "Please choose one option") {
      return "*Chose is your position now !";
    }
    return "";
  };

  const handleInputChange = (event) => {
    setFormData(event.target.value);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameError = validateName();
    const emailError = validateEmail();
    const passwordError = validatePassword();
    const checkboxError = validateCheckBox();
    const selectError = validateSelect();


    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      checkbox: checkboxError,
      select: selectError,
    });

    if (!nameError && !emailError && !passwordError && !checkboxError && !selectError) {
      console.log("Form submitted:", formData);
    return setShowAlert(true);

    }
  };

  return (
    <div className="bForm">
      <div className="title">
        <h2>Pendaftaran Nakama</h2>
        <h2>Mugi - MugiWaras</h2>
      </div>
      <div className="myform">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <input
              className="formInput"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="myform">
            <p>Chose Your Power!</p>
          </div>
          <div className="formCheckBox">
            <p>
              Haki :
              <input
                className="chkbox"
                type="checkbox"
                id="checkbox1"
                name="power"
                checked={formData.power === "checkbox1"}
                onChange={handleInputChange}
                value="checkbox1"
              />
            </p>
            <p>
              Buah Iblis :
              <input
                className="chkbox"
                type="checkbox"
                id="checkbox2"
                name="power"
                checked={formData.power === "checkbox2"}
                onChange={handleInputChange}
                value="checkbox2"
              />
            </p>
            <p>
              Normal :
              <input
                className="chkbox"
                type="checkbox"
                id="checkbox3"
                name="power"
                checked={formData.power === "checkbox3"}
                onChange={handleInputChange}
                value="checkbox3"
              />
            </p>
          </div>
          <div>
            {errors.checkbox && <div className="error">{errors.checkbox}</div>}
          </div>
          <div className="myform">
            <p>Chose Your Positon!</p>
          </div>
          <div className="myform">
            <select className="select" name="posisi" onChange={handleInputChange}>
              {option.map((option, index) => {
                return (
                  <option value={option.value} key={index}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            {errors.posisi && <div className="error">{errors.posisi}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {showAlert && (
        <div className="alert">
          Form submitted! Thank you.
        </div>
      )}
      </div>
  
    </div>

  );
};

export default ValidationForm;
