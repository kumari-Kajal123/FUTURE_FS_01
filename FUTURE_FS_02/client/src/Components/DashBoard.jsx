import React from 'react'

export default function DashBoard() {
  return (<>
<div className="min-h-screen bg-gray-100 p-4 md:p-6">
  <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
    Leads Dashboard
  </h1>

  <div className="bg-white shadow-md rounded-lg p-4">

    {/* Header (hide on small screens) */}
    <div className="hidden md:grid grid-cols-4 font-semibold text-gray-600 border-b pb-2 mb-2">
      <p>Name</p>
      <p>Email</p>
      <p>Phone</p>
      <p>Status</p>
    </div>

    {/* Lead Card / Row */}
    <div className="border-b py-4 md:grid md:grid-cols-4 md:items-center hover:bg-gray-50 transition">

      {/* Mobile View */}
      <div className="md:hidden space-y-1">
        <p><span className="font-semibold">Name:</span> Kajal Kumari</p>
        <p><span className="font-semibold">Email:</span> kajal@gmail.com</p>
        <p><span className="font-semibold">Phone:</span> 9876543210</p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
            New
          </span>
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block text-gray-800">Kajal Kumari</div>
      <div className="hidden md:block text-gray-600">kajal@gmail.com</div>
      <div className="hidden md:block text-gray-600">9876543210</div>
      <div className="hidden md:block">
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
