import React, { useState } from "react";

function ServiceForm() {
  const [val, setVal] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  // ✅ Generic handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setVal((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Request Software Services
        </h2>

        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={val.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={val.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block mb-1 font-medium">Service Type</label>
            <select
              name="service"
              value={val.service}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="app">Mobile App Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="maintenance">Software Maintenance</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 font-medium">Budget</label>
            <input
              type="number"
              name="budget"
              value={val.budget}
              onChange={handleChange}
              placeholder="Enter budget"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Project Details</label>
            <textarea
              rows="4"
              name="message"
              value={val.message}
              onChange={handleChange}
              placeholder="Describe your project..."
              className="w-full border p-2 rounded-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
