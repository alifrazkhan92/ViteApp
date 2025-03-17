import React, { useState } from "react";

const Forms = () => {
  //   const [firstName, setFirstName] = useState();
  //   const [lastName, setLastName] = useState();

  //   const handleFirstName = (e) => {
  //     setFirstName(e.target.value);
  //   };

  //   const handleLastName = (e) => {
  //     setLastName(e.target.value);
  //   };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Forms</h1>
      <hr />

      <form action="">
        First name:{" "}
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={formData.firstName}
        />
        <br />
        Last name:{" "}
        <input
          type="text"
          onChange={handleChange}
          name="lname"
          value={formData.lastName}
        />
      </form>
    </>
  );
};

export default Forms;
