import React from 'react'
import { useState } from 'react';
import axios from "axios";

export default function DashBoard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/lead");
      setLeads(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchLeads();
}, []);

  return (<>
{leads.map((lead) => (
  <div
    key={lead._id}
    className="border-b py-4 grid gap-2 md:grid-cols-4 md:items-center hover:bg-gray-50 transition"
  >

    {/* Name */}
    <div className="text-gray-800">
      <span className="font-semibold md:hidden">Name: </span>
      {lead.name}
    </div>

    {/* Email */}
    <div className="text-gray-600">
      <span className="font-semibold md:hidden">Email: </span>
      {lead.email}
    </div>

    {/* Phone */}
    <div className="text-gray-600">
      <span className="font-semibold md:hidden">Phone: </span>
      {lead.phone}
    </div>

    {/* Status */}
    <div>
      <span className="font-semibold md:hidden">Status: </span>
      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
        {lead.status}
      </span>
    </div>

  </div>
))}
    {/* <div>
      <h1>Leads</h1>
      {leads.map((lead) => (
        <div key={lead._id}>
          <p>{lead.firstName} {lead.lastName}</p>
          <p>{lead.email}</p>
          <p>{lead.phone}</p>
          <p>Status: {lead.status}</p>
        </div>
      ))}
    </div> */}
  </>
  )
}
