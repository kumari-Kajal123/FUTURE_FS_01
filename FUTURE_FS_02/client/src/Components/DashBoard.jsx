import React from 'react'

export default function DashBoard() {
  return (<>
<div className="min-h-screen bg-gray-100 p-4 md:p-6">
  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
    Leads Dashboard
  </h1>

  <div className="bg-white shadow-md rounded-lg p-4">

    {/* Header --- hide on small screens */}
    <div className="hidden md:grid grid-cols-4 font-semibold text-gray-600 border-b pb-2 mb-2">
      <p>Name</p>
      <p>Email</p>
      <p>Phone</p>
      <p>Status</p>
    </div>

    {/* Lead Card / Row */}
    <div className="border-b py-4 grid gap-2 md:grid-cols-4 md:items-center hover:bg-gray-50 transition">

      {/* Name */}
      <div className="text-gray-800">
        <span className="font-semibold md:hidden">Name: </span>
        Kajal Kumari
      </div>

      {/* Email */}
      <div className="text-gray-600">
        <span className="font-semibold md:hidden">Email: </span>
        kajal@gmail.com
      </div>

      {/* Phone */}
      <div className="text-gray-600">
        <span className="font-semibold md:hidden">Phone: </span>
        9876543210
      </div>

      {/* Status */}
      <div>
        <span className="font-semibold md:hidden">Status: </span>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
          New
        </span>
      </div>

    </div>


  </div>
</div>

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
