import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // data.preventDefault()
    try{
      await axios.post("http://localhost:5000/lead", data);
      console.log(data)
    }catch(err){
       console.log(err.response?.data);
    }
     reset()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* First Name */}
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">First name is required</p>
            )}
          </div>

          {/* Last Name */}
          {/* <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">Last name is required</p>
            )}
          </div> */}

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full border rounded-md p-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter phone number"
                />
            {errors.phone && (
              <p className="text-red-500 text-sm">Phone is required</p>
            )}
          </div>
        </div>

        {/* Come from where */}
          <div>
            <label className="block text-gray-700">Email</label>
            <select {...register("source")} className="w-full border p-2">
                <option value="Website">Website</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
            </select>
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

        <button
          type="submit"
          className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
