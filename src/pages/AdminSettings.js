
import { useState } from "react"

import axios from "axios"; 
import { Home, Users, Calendar, Award, Clock, Folder, Bell, Settings, Edit, ChevronRight, Star,ChevronDown,Upload } from "lucide-react"
import { Link } from "react-router-dom";
const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    student_id: "",
    phone_number: "",  
    interface_language: "",
    time_zone: "",
    profile_picture: "",
});


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:8000/create-profile/", formData);
        console.log(response.data);
        alert("Profile updated successfully!");
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
    }
};


  return (
    <div className="flex min-h-screen bg-[#f5f8f8]">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6">
        <h1 className="text-2xl font-bold mb-1">Techno Club</h1>
      
<nav className="flex-1">
          <ul className="space-y-2">
            <li>
            <Link to="/dashboard" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Dashboard
              </Link>
            </li>
            <li>
            <Link to="/club" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                My Clubs
              </Link>
            </li>
            <li>
            <Link to="/event" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Event
              </Link>
            </li>
            <li>
            <Link to="/achievements" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                My Achievements
              </Link>
            </li>
            <li>
            <Link to="/requests" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Pending Requests
              </Link>
            </li>
            <li>
            <Link to="/resources" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Resources
              </Link>
            </li>
            <li>
            <Link to="/announcements" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
              Announcements
              </Link>
            </li>
            <li>
            <Link to="/settings" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-2">Profile Settings</h2>
          <p className="text-gray-500 mb-8">Manage your personal information and account settings</p>

          <form onSubmit={handleSubmit}>
      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <img
            // src={previewImage || "/placeholder.svg?height=120&width=120"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer">
            <Upload size={16} className="text-gray-600" />
            {/* <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" /> */}
          </label>
        </div>
        <p className="text-gray-500 text-sm mt-2">Supported formats: JPG, PNG. Max size: 5MB</p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="full_name" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="student_id" className="block text-gray-700 mb-2">
            Student ID
          </label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone_number" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="interface_language" className="block text-gray-700 mb-2">
            Interface Language
          </label>
          <div className="relative">
            <select
              id="interface_language"
              name="interface_language"
              value={formData.interface_language}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="English (US)">English (US)</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="time_zone" className="block text-gray-700 mb-2">
            Time Zone
          </label>
          <div className="relative">
            <select
              id="time_zone"
              name="time_zone"
              value={formData.time_zone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pacific Time (PT)">Pacific Time (PT)</option>
              <option value="Mountain Time (MT)">Mountain Time (MT)</option>
              <option value="Central Time (CT)">Central Time (CT)</option>
              <option value="Eastern Time (ET)">Eastern Time (ET)</option>
              <option value="Greenwich Mean Time (GMT)">Greenwich Mean Time (GMT)</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
        <button
          type="button"
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
          onClick={() => window.location.reload()} // Reset form
        >
          Cancel
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  )
}

// Component for sidebar items
const SidebarItem = ({ icon, label, active = false }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
    >
      <div className={`${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</div>
      <span className={`ml-3 ${active ? "text-blue-600 font-medium" : "text-gray-700"}`}>{label}</span>
    </div>
  )
}

export default ProfileSettings

