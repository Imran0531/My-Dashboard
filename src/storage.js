// // Local storage for dashboard items (static, no backend)
// const KEY = "dashboard_items_v1";

// export function getItems() {
//   const raw = localStorage.getItem(KEY);
//   if (raw) {
//     try {
//       return JSON.parse(raw);
//     } catch {
//       // fall through to defaults
//     }
//   }
//   const defaults = [
//     { id: 1, title: "Initial Screening", owner: "Alice", status: "In Progress", dueDate: "2025-08-25" },
//     { id: 2, title: "Quarterly Planning", owner: "Bob", status: "Pending", dueDate: "2025-09-05" },
//     { id: 3, title: "Config rollout v2", owner: "Charlie", status: "Completed", dueDate: "2025-08-01" },
//   ];
//   saveItems(defaults);
//   return defaults;
// }

// export function saveItems(items) {
//   localStorage.setItem(KEY, JSON.stringify(items));
// }

// export function addItem(item) {
//   const items = getItems();
//   const nextId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
//   const newItem = { id: nextId, ...item };
//   items.push(newItem);
//   saveItems(items);
//   return newItem;
// }
// Local storage for dashboard items (static, no backend)
const KEY = "dashboard_items_v1";

export function getItems() {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      // If corrupted, reset to defaults
    }
  }

  // Default static rows
  const defaults = [
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
  ];

  saveItems(defaults);
  return defaults;
}

export function saveItems(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addItem(item) {
  const items = getItems();
  const nextSno = items.length ? Math.max(...items.map(i => i.s_no)) + 1 : 1;

  const newItem = {
    s_no: nextSno,
    client_name: item.client_name || "Unknown Client",
    requisition_id: item.requisition_id || `RQ${String(nextSno).padStart(4, "0")}`,
    planning_id: item.planning_id || `PL${String(nextSno).padStart(4, "0")}`,
    job_position: item.job_position || "Not Assigned",
    recruiter: item.recruiter || "Not Assigned",
    division: item.division || "Banking",
    department: item.department || "Banking",
    status: item.status || "In Progress",
    date: item.date || new Date().toISOString().split("T")[0]
  };

  items.push(newItem);
  saveItems(items);
  return newItem;
}
