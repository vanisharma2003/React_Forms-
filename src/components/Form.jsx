import React, { useState, useContext } from "react";
import validateform from "../validations";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext.jsx";

const Form = () => {
  const navigate = useNavigate();
  const { addEntry } = useContext(DataContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState(null);
  const [errors, setErrors] = useState({});

  const courseOptions = [
    { value: "1", label: "PCM" },
    { value: "2", label: "PCB" },
    { value: "3", label: "COMMERCE" },
    { value: "4", label: "ARTS" },
  ];

  const submit = (e) => {
    e.preventDefault();
    const formErrors = validateform({
      name,
      email,
      password,
      age,
      dob,
      gender,
      course,
    });
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      addEntry({
        name,
        email,
        age,
        dob,
        gender,
        course: course ? course.label : "",
      });
      navigate("/data");
    }
  };
  
  
  return (
    <form onSubmit={submit}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="p-4 border rounded shadow">
              <h3 className="text-center mb-4">Registration Form</h3>

              {/* Name field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name ? <small className="text-danger">{errors.name}</small> : null}
              </div>

              {/* Email field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email ? <small className="text-danger">{errors.email}</small> : null}
              </div>

              {/* Password field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password ? <small className="text-danger">{errors.password}</small> : null}
              </div>

              {/* Age field */}
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                {errors.age ? <small className="text-danger">{errors.age}</small> : null}
              </div>

              {/* Date of birth field */}
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  min="2000-01-01"
                  max="2020-30-12"
                />
                {errors.dob ? <small className="text-danger">{errors.dob}</small> : null}
              </div>

              {/* Gender field */}
              <div className="mb-3">
                <label className="form-label d-block">Gender</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                {errors.gender ? <small className="text-danger">{errors.gender}</small> : null}
              </div>

              {/* Course field using react-select */}
              <div className="mb-3">
                <label htmlFor="courses" className="form-label">Select Courses</label>
                <Select
                  id="courses"
                  options={courseOptions}
                  isMulti={false}
                  isSearchable={true}
                  value={course}
                  onChange={(selectedOption) => setCourse(selectedOption)}
                  placeholder="Choose your course"
                />
                {errors.course && <small className="text-danger">{errors.course}</small>}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;