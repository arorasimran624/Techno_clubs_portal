import { Home,LayoutGrid, Users, Calendar, Award, Clock, FileText, Bell, Settings, Search, MapPin } from "lucide-react"
import {Link} from "react-router-dom"

import { useState, useEffect } from "react";
import axios from "axios";
const TechnoClubsAnnouncements = () => {
    const [announcement, setAnnouncement] = useState("");
   
  
  const [events, setEvents] = useState([]);


  // Fetch events from FastAPI backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/events/");
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/events/") 
      .then(response => {
        setEvents(response.data.events); 
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }, []);


  const handleCreateAnnouncement = async () => {
    if (!announcement.trim()) {
      alert("Please enter an announcement");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/create_announcement/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ announcement_text: announcement }),
      });

      if (response.ok) {
        alert(`New Announcement Created: ${announcement}`);
        setAnnouncement(""); // Clear input field
      } else {
        alert("Failed to create announcement.");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
    }
  };


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-white shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-medium text-[#F47B54]">Techno Clubs</h1>
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
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Announcements</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-[#F47B54] focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">New Announcement</h2>
          <textarea
            className="w-full h-32 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47B54]"
            placeholder="Write your announcement here..."
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
          />
          <button
            className="mt-4 bg-[#F47B54] text-white py-2 px-6 rounded-md hover:bg-[#E56A43] transition"
            onClick={handleCreateAnnouncement}
          >
            Create
          </button>
        </div>

        {/* Next Events */}
        <div>
          <h2 className="text-xl font-bold mb-4">Next Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dynamically render EventCards */}
            {events.length > 0 ? (
              events.slice(0,6)
              .map((event, index) => (
                <EventCard
                  key={index}
                  title={event.event_name}
                  date={event.event_date}
                  description={event.description}
                  location={event.venue}
             />
              ))
            ) : (
              <p>No upcoming events.</p>
            )}
          </div>
        
        </div>
      </div>
    </div>
  )
}

// Component for sidebar items
const SidebarItem = ({ icon, label, active = false }) => {
    return (
      <div
        className={`flex items-center px-6 py-3 cursor-pointer ${active ? "bg-[#F47B54] bg-opacity-10 border-l-4 border-[#F47B54]" : "hover:bg-gray-100"}`}
      >
        <div className={`${active ? "text-[#F47B54]" : "text-gray-500"}`}>{icon}</div>
        <span className={`ml-3 ${active ? "text-[#F47B54] font-medium" : "text-gray-600"}`}>{label}</span>
      </div>
    );
  };
  

// Component for winner cards
const WinnerCard = ({ name, competition, award, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-2">
        <img src={image || "/placeholder.svg"} alt={name} className="w-16 h-16 rounded-full object-cover" />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{competition}</p>
      <div className="bg-[#F47B54] text-white py-2 px-4 rounded-full text-sm">{award}</div>
    </div>
  )
}

// Component for event cards
const EventCard = ({ title, date, description, location, time, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
     
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">{title}</h3>
          <span className="bg-[#F8A57B] text-white text-xs px-2 py-1 rounded">{date}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={16} className="mr-2" />
          {location}
        </div>
      
      </div>
    </div>
  )
}

export default TechnoClubsAnnouncements