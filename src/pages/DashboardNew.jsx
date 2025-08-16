// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addItem } from "../storage";

// export default function DashboardNew() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [owner, setOwner] = useState("");
//   const [status, setStatus] = useState("Pending");
//   const [dueDate, setDueDate] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!title.trim() || !owner.trim() || !dueDate) return;

//     addItem({ title: title.trim(), owner: owner.trim(), status, dueDate });
//     navigate("/dashboard", { replace: true });
//   }

//   return (
//     <div className="panel">
//       <div className="panel-header">
//         <h2>New Dashboard Item</h2>
//       </div>

//       <form className="form-grid" onSubmit={handleSubmit}>
//         <label className="field">
//           <span>Title</span>
//           <input
//             type="text"
//             required
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//             placeholder="e.g., Data quality check"
//           />
//         </label>

//         <label className="field">
//           <span>Owner</span>
//           <input
//             type="text"
//             required
//             value={owner}
//             onChange={e => setOwner(e.target.value)}
//             placeholder="e.g., Priya"
//           />
//         </label>

//         <label className="field">
//           <span>Status</span>
//           <select value={status} onChange={e => setStatus(e.target.value)}>
//             <option>Pending</option>
//             <option>In Progress</option>
//             <option>Completed</option>
//             <option>Blocked</option>
//           </select>
//         </label>

//         <label className="field">
//           <span>Due Date</span>
//           <input
//             type="date"
//             required
//             value={dueDate}
//             onChange={e => setDueDate(e.target.value)}
//           />
//         </label>

//         <div className="form-actions">
//           <button type="button" className="btn btn-ghost" onClick={() => navigate(-1)}>Cancel</button>
//           <button type="submit" className="btn btn-primary">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../storage";

export default function DashboardNew() {
  const navigate = useNavigate();

  const [client_name, setClientName] = useState("");
  const [planning_id, setPlanningId] = useState("");
  const [job_position, setJobPosition] = useState("");
  const [recruiter, setRecruiter] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Pending");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!client_name.trim() || !planning_id.trim() || !job_position.trim() || !date) {
      return;
    }

    addItem({
      client_name: client_name.trim(),
      planning_id: planning_id.trim(),
      job_position: job_position.trim(),
      recruiter: recruiter.trim() || "Not Assigned",
      division: division.trim() || "Banking",
      department: department.trim() || "Banking",
      status,
      date
    });

    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h2>New Job Requisition</h2>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="field">
          <span>Client Name *</span>
          <input
            type="text"
            required
            value={client_name}
            onChange={e => setClientName(e.target.value)}
            placeholder="Enter client name"
          />
        </label>

        <label className="field">
          <span>Planning ID *</span>
          <input
            type="text"
            required
            value={planning_id}
            onChange={e => setPlanningId(e.target.value)}
            placeholder="e.g., PL0005"
          />
        </label>

        <label className="field">
          <span>Job Position *</span>
          <input
            type="text"
            required
            value={job_position}
            onChange={e => setJobPosition(e.target.value)}
            placeholder="e.g., Software Engineer"
          />
        </label>

        <label className="field">
          <span>Recruiter</span>
          <input
            type="text"
            value={recruiter}
            onChange={e => setRecruiter(e.target.value)}
            placeholder="Not Assigned"
          />
        </label>

        <label className="field">
          <span>Division</span>
          <input
            type="text"
            value={division}
            onChange={e => setDivision(e.target.value)}
            placeholder="Banking"
          />
        </label>

        <label className="field">
          <span>Department</span>
          <input
            type="text"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            placeholder="Banking"
          />
        </label>

        <label className="field">
          <span>Status</span>
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Blocked</option>
          </select>
        </label>

        <label className="field">
          <span>Due Date *</span>
          <input
            type="date"
            required
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
