import { useRef, useState } from "react";

function Contact(props) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const randomField = useRef(null);

  const handleChange = (event) => {
    const newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = (event) => {
    // prevent from refreshing the page
    event.preventDefault();
    console.log(randomField.current.value);
    setSubmitted(true);
  };

  const resetForm = (event) => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
    setSubmitted(false);
  };

  //show the thank you message if the form has been submitted
  if (submitted) {
    return (
      <div className="Contact">
        Thank you, {formData.firstName}, for submitting the form <br />
        <button onClick={resetForm}>Reset Form</button>
      </div>
    );
  }

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
          />
        </div>
        <button>Submit Form</button> <br />
        <hr />
        {JSON.stringify(formData)}
      </form>

      {/* Demonstrate useRef */}
      <div>
        <label>Random field:</label>
        <input type="text" ref={randomField} name="randomField"/>
      </div>
    </div>
  );
}
export default Contact;

// React is a library whereas Angular is a framework. 