import { Home, Users, Calendar, Award, Clock, Folder, Bell, Settings, Edit, ChevronRight, Star } from "lucide-react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [userName, setUserName] = useState("");

  const [showAllEvents, setShowAllEvents] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const hardcodedEmail = "reet@gmail.com"; // Replace with an actual email
        const response = await axios.get(`http://localhost:8000/profile/${hardcodedEmail}`);
        setUserName(response.data.profile.full_name); // Adjust based on your API response
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchUserName();
  }, []);


  const [events, setEvents] = useState([]);

  const navigate = useNavigate(); // Fix 1: Define navigate
  const handleAction = (action, requestId) => {
    console.log(`${action} request with ID: ${requestId}`);

    navigate("/requests");
  };
  const handleSetting = (action, requestId) => {
    console.log(`${action} request with ID: ${requestId}`);

    navigate("/settings");
  };
  const handleEvent = (action, requestId) => {
    console.log(`${action} request with ID: ${requestId}`);
    // You can add API call logic here if needed
    navigate("/event"); // Redirect to Pending Requests page
  };
  const handleRecord = (action, requestId) => {
    console.log(`${action} request with ID: ${requestId}`);
    // You can add API call logic here if needed
    navigate("/resources"); // Redirect to Pending Requests page
  };
  // Fetch events from FastAPI backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/events/");
        setEvents(response.data.events); // Ensure this matches the structure your backend sends
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://localhost:8000/announcements/");
        setAnnouncements(response.data.announcements); // Set fetched announcements
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    fetchAnnouncements();
  }, []);


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-white p-6 flex flex-col">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-2">
            <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-semibold">{userName || "Loading..."}</h2>
          <p className="text-gray-500">Admin</p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 rounded-md mb-6" onClick={() => handleSetting("Setting")}>
          <Edit className="w-4 h-4" />
          Edit Profile
        </button>

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome {userName}!</h1>
          <p className="text-gray-600">Good morning! Here's what's happening today:</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
          <div className="space-y-4">
            {[
              { id: 1, text: "Sarah Parker wants to join Photography Club" },
              { id: 2, text: "Mike Wilson requests to join Debate Team" },
              { id: 3, text: "Emma Davis applied for Chess Club" },
            ].map((request) => (
              <div key={request.id} className="flex items-center justify-between">
                <p className="text-gray-700">{request.text}</p>
                <div className="flex gap-2">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded"
                    onClick={() => handleAction("Approved", request.id)}>Approve</button>
                  <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded" onClick={() => handleAction("Rejected", request.id)}>Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
         
          <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold">Upcoming Events</h2>
  <a
    href="#"
    className="text-orange-400 hover:text-orange-500 flex items-center cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents the default anchor action
      setShowAllEvents(!showAllEvents);
    }}
  >
    {showAllEvents ? "Show Less" : "View All"}
    <ChevronRight className="w-4 h-4" />
  </a>
</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {events.length > 0 ? (
      (showAllEvents ? events : events.slice(0, 6)).map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-lg mb-1">{event.event_name}</h3>
          <p className="text-gray-500 mb-1">{event.event_date}</p>
          <p className="text-gray-500">{event.venue}</p>
        </div>
      ))
    ) : (
      <p>No upcoming events available.</p>
    )}
  </div>
      </div>


    

      {/* Right Sidebar */ }
  <div className="w-80 border-l border-gray-200 bg-white p-6">
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
      <div className="space-y-4">
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <div key={index} className="border-b border-gray-100 pb-4">
              <h3 className="font-medium mb-1">{announcement.announcement_text}</h3>
              <p className="text-sm text-gray-500">{announcement.created_at}</p> {/* Assuming 'created_at' exists */}
            </div>
          ))
        ) : (
          <p>No announcements available.</p>
        )}
      </div>
    </div>


    <div className="space-y-3">
      <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-md font-medium" onClick={() => handleEvent("created")}>
        Create New Event
      </button>
      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-md font-medium" onClick={() => handleRecord("recorded")}>
        Generate Reports
      </button>
    </div>
  </div>
    </div >
  )
}

