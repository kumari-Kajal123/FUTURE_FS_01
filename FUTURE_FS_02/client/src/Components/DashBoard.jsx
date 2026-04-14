import axios from 'axios';
import React, {  useEffect, useState } from 'react'

export default function DashBoard() {

  const [leads , setLeads] = useState([])

  const fetchLeads = async ()=>{
    const res = await axios.get("http://localhost:5000/lead")
    setLeads(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    fetchLeads()
  },[])

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/lead/${id}`, { status });
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:5000/lead/${id}`);
    fetchLeads();
  };
  

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

{/* {lead.status === "Contacted" ? (
  <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
    Contacted
  </button>
) : (
  <button
    onClick={() => updateStatus(lead._id, "Contacted")}
    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
  >
    Contacted
  </button>
)}

          <button onClick={()=>deleteLead(lead._id)}>
            Delete
          </button> */}
          <div className="flex gap-3 mt-3">

            {lead.status === "Contacted" ? (
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
                ✓ Contacted
              </button>
            ) : (
              <button
                onClick={() => updateStatus(lead._id, "Contacted")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                ✓ Contacted
              </button>
            )}

            <button
              onClick={() => deleteLead(lead._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              🗑 Delete
            </button>

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
