import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component'; 

const StudentTable = () => {
  const { data, deleteEntry, updateEntry } = useContext(DataContext);
  const navigate = useNavigate();
  const [editingRow, setEditingRow] = useState(null);
  const [editedData, setEditedData] = useState({});

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
    { name: "DOB", selector: (row) => row.dob, sortable: true },
    { name: "Gender", selector: (row) => row.gender, sortable: true },
    { name: "Course", selector: (row) => row.course, sortable: true },
    {
      name: "Actions",
      cell: (row, index) => (
        <>
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => startEditing(index, row)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteEntry(index)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  const startEditing = (index, row) => {
    setEditingRow(index);
    setEditedData({ ...row }); 
  };

  const saveEdit = () => {
    updateEntry(editingRow, editedData);
    setEditingRow(null);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Student Table</h3>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/")}>
        Back to Form
      </button>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
      />

      {editingRow !== null && (
        <div className="mt-3">
          <h5>Edit Entry</h5>
          <div className="mb-2">
            <input
              type="text"
              className="form-control mb-2"
              value={editedData.name}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Name"
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              className="form-control mb-2"
              value={editedData.email}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              className="form-control mb-2"
              value={editedData.age}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, age: e.target.value }))
              }
              placeholder="Age"
            />
          </div>
          <div className="mb-2">
            <input
              type="date"
              className="form-control mb-2"
              value={editedData.dob}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, dob: e.target.value }))
              }
              placeholder="DOB"
            />
          </div>
          <div className="mb-2">
            <select
              className="form-control mb-2"
              value={editedData.gender}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control mb-2"
              value={editedData.course}
              onChange={(e) =>
                setEditedData((prev) => ({ ...prev, course: e.target.value }))
              }
              placeholder="Course"
            />
          </div>

          <button className="btn btn-success me-2" onClick={saveEdit}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={() => setEditingRow(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
