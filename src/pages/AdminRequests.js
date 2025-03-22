
import { useState,useEffect } from "react"
import {
  Search,Home,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  Calendar,
  Award,
  ClipboardList,
  BookOpen,
  Bell,
  Settings,Upload,
} from "lucide-react"

import { Link } from "react-router-dom";
const PendingRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, student_name: "Alex Johnson", club_name: "Robotics Club", request_date: "2024-01-15", status: "Pending" },
    { id: 2, student_name: "Sarah Williams", club_name: "AI Society", request_date: "2024-01-14", status: "Accepted" },
    { id: 3, student_name: "Michael Brown", club_name: "Coding Club", request_date: "2024-01-14", status: "Pending" },
    { id: 4, student_name: "Emily Davis", club_name: "IoT Workshop", request_date: "2024-01-13", status: "Accepted" },
    { id: 5, student_name: "David Wilson", club_name: "Game Dev Club", request_date: "2024-01-13", status: "Pending" },
  ])
  const [pendingRequests, setPendingRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [file, setFile] = useState(null);
  // const [requests, setRequests] = useState([]);
   

  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:8000/requests");
      const data = await response.json();
      setRequests(data.requests || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Handle JSON File Upload
  const handleFileUpload = async () => {
    alert("hello")
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/upload-json", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("File uploaded successfully!");
        fetchRequests(); // Refresh UI after upload
      } else {
        alert("File upload failed: " + result.detail);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/accept-request/${id}`, {
        method: "PUT",
      });

      if (response.ok) {
        fetchRequests();
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete-request/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchRequests();
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };


  
  const totalRequests = 156
  const pendingRequest = 24
  const acceptedRequests = 132
  const itemsPerPage = 5;

  

  
   // Pagination Logic
   const totalPages = Math.ceil(pendingRequests.length / itemsPerPage);
   const currentRequests = pendingRequests.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );


   const goToPage = (page) => {
     setCurrentPage(page);
   };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-[#e86a45]">Techno Clubs</h1>
        </div>
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
      <div className="flex-1 p-8 overflow-auto">
      <div className="mb-8 flex justify-between items-center">
  <div>
    <h1 className="text-2xl font-semibold text-gray-700">Pending Requests</h1>
    <p className="text-gray-500">Manage student enrollment requests</p>
  </div>

  {/* File Upload Section - Moved to Right */}
  <div className="flex items-center space-x-4">
    <input
      type="file"
      accept=".json"
      onChange={(e) => setFile(e.target.files[0])}
      className="border border-gray-300 rounded-md px-3 py-2"
    />
    <button
      onClick={handleFileUpload}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
    >
      <Upload className="w-4 h-4 mr-2" />
      Upload JSON
    </button>
  </div>
</div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard number={totalRequests} label="Total Requests" bgColor="bg-[#ffecc1]" textColor="text-[#e6b949]" />
          <StatCard
            number={pendingRequest}
            label="Pending Requests"
            bgColor="bg-[#f8c4a3]"
            textColor="text-[#e86a45]"
          />
          <StatCard number={acceptedRequests} label="Accepted Requests" bgColor="bg-[#3db39e]" textColor="text-white" />
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-gray-700">
            <span>All Requests</span>
          </button>
        </div>

                <input type="text" placeholder="Search requests..." className="search-bar" />

                <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Club Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {requests.length > 0 ? (
  requests.map((request) => (
    <tr key={request.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {request.student_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {request.club_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {request.request_date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            request.status === "Accepted"
              ? "bg-[#3db39e] text-white"
              : "bg-[#f8c4a3] text-white"
          }`}
        >
          {request.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                    {request.status === "Pending" && (
                      <div className="flex space-x-2">
                        <button onClick={() => handleAccept(request.id)} className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                          <Check size={18} />
                        </button>
                        <button onClick={() => handleReject(request.id)} className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                          <X size={18} />
                        </button>
                      </div>
                    )}


                    </div>
                  </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
      No Requests Available
    </td>
  </tr>
)}

              
            </tbody>
          </table>

</div>

<div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, pendingRequests.length)} of {pendingRequests.length} results
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <ChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`p-2 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

      </div>
    </div>
  )
}

// Helper Components
const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center px-6 py-3 cursor-pointer ${active ? "bg-[#fef0e8] text-[#e86a45] border-l-4 border-[#e86a45]" : "text-gray-600 hover:bg-gray-100"}`}
  >
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </div>
)

const StatCard = ({ number, label, bgColor, textColor }) => (
  <div className={`${bgColor} rounded-lg p-6`}>
    <h2 className={`text-3xl font-bold ${textColor}`}>{number}</h2>
    <p className={`${textColor}`}>{label}</p>
  </div>
)

const PaginationButton = ({ children, active, disabled }) => (
  <button
    className={`w-8 h-8 flex items-center justify-center rounded-md ${
      active
        ? "bg-[#e86a45] text-white"
        : disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    disabled={disabled}
  >
    {children}
  </button>
)

export default PendingRequests

