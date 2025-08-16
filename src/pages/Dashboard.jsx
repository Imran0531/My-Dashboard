// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getItems } from "../storage";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(getItems());
//   }, []);

//   return (
//     <div className="panel">
//       <div className="panel-header">
//         <h2>Dashboard</h2>
//         <div className="actions">
//           <button className="btn" onClick={() => navigate("/dashboard/new")}>New</button>
//         </div>
//       </div>

//       <div className="table-wrap">
//         <table className="table">
//           <thead>
//             <tr>
//               <th style={{width: 70}}>ID</th>
//               <th>Title</th>
//               <th>Owner</th>
//               <th>Status</th>
//               <th>Due Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.length === 0 && (
//               <tr><td colSpan={5} className="muted center">No items</td></tr>
//             )}
//             {items.map(row => (
//               <tr key={row.id}>
//                 <td>{row.id}</td>
//                 <td>{row.title}</td>
//                 <td>{row.owner}</td>
//                 <td>
//                   <span className={`badge ${row.status.toLowerCase().replace(" ", "-")}`}>
//                     {row.status}
//                   </span>
//                 </td>
//                 <td>{row.dueDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }
import React, { useState } from "react";
import DashboardNew from "./DashboardNew";
import "./Dashboard.css";

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  // Initial static data
  const [data, setData] = useState([
    {
      S_No: 1,
      client_name: "Google",
      requisition_id: "RQ0003",
      planning_id: "PL0004",
      job_position: "Product Manager",
      recruiter: "Not Assigned",
      division: "Banking",
      department: "Banking",
      status: "In Progress",
      date: "2025-08-25"
    },
    {
      S_No: 2,
      client_name: "CloudNexa",
      requisition_id: "RQ0002",
      planning_id: "PL0002",
      job_position: "Software Engineer",
      recruiter: "Not Assigned",
      division: "Banking",
      department: "Banking",
      status: "Pending",
      date: "2025-09-05"
    },
    {
      S_No: 3,
      client_name: "Accenture",
      requisition_id: "RQ0001",
      planning_id: "PL0001",
      job_position: "Software Engineer",
      recruiter: "Not Assigned",
      division: "Banking",
      department: "Banking",
      status: "Completed",
      date: "2025-08-01"
    }
  ]);

  const handleAdd = (newData) => {
    const nextSno = data.length + 1;
    setData([
      ...data,
      {
        s_no: nextSno,
        client_name: newData.client_name,
        requisition_id: "RQ000" + (nextSno + 1), // generate simple ID
        planning_id: newData.planning_id,
        job_position: "Not Assigned",
        recruiter: "Not Assigned",
        division: "Banking",
        department: "Banking",
        status: "In Progress",
        date: new Date().toISOString().split("T")[0]
      }
    ]);
    setShowForm(false);
  };

  return (
    <div className="dashboard-container">
      {/* Header with title & button */}
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="btn-new" onClick={() => setShowForm(true)}>
          New
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <DashboardNew onAdd={handleAdd} onCancel={() => setShowForm(false)} />
      )}

      {/* Table */}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>S_No</th>
            <th>Client Name</th>
            <th>Requisition ID</th>
            <th>Planning ID</th>
            <th>Job Position</th>
            <th>Recruiter</th>
            <th>Division</th>
            <th>Department</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.s_no}>
              <td>{row.s_no}</td>
              <td>{row.client_name}</td>
              <td>{row.requisition_id}</td>
              <td>{row.planning_id}</td>
              <td>{row.job_position}</td>
              <td>{row.recruiter}</td>
              <td>{row.division}</td>
              <td>{row.department}</td>
              <td>
                <span
                  className={`status ${row.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {row.status}
                </span>
              </td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
