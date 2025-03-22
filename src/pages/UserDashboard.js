import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, SlidersHorizontal, FileText, Download } from 'lucide-react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const StudentDashboard = () => {
    const navigate = useNavigate();
  const handleSetting = (action, requestId) => {
    console.log(`${action} request with ID: ${requestId}`);

    navigate("/usersettings");
  };
    const [events, setEvents] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:8000/events/") 
        .then(response => {
          setEvents(response.data.events); 
        })
        .catch(error => {
          console.error("Error fetching events:", error);
        });
    }, []);
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
      const fetchAnnouncements = async () => {
        try {
          const response = await axios.get("http://localhost:8000/announcements/");
          setAnnouncements(response.data.announcements);
        } catch (error) {
          console.error("Error fetching announcements:", error);
        }
      };
      fetchAnnouncements();
    }, []);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="flex flex-col items-center py-8">
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
          <h3 className="mt-4 font-medium text-gray-700">Alex Johnson</h3>
          <p className="text-sm text-gray-500">Student</p>
          <button className="mt-4 px-4 py-2 bg-orange-300 text-white rounded-md hover:bg-orange-400 transition"onClick={() => handleSetting("Setting")}>
            Edit Profile
          </button>
        </div>

        <nav className="flex-1">
                 <ul className="space-y-2">
                   <li>
                   <Link to="/userdashboard" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       Dashboard
                     </Link>
                   </li>
                   <li>
                   <Link to="/usermyclub" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       My Clubs
                     </Link>
                   </li>
                   <li>
                   <Link to="/userevent" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       Event
                     </Link>
                   </li>
                   <li>
                   <Link to="/userachievements" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       My Achievements
                     </Link>
                   </li>
                 
                   <li>
                   <Link to="/userresource" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       Resources
                     </Link>
                   </li>
                   <li>
                   <Link to="/userannouncements" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                     Announcements
                     </Link>
                   </li>
                   <li>
                   <Link to="/usersettings" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                       <Home className="w-5 h-5 text-gray-600" />
                       Settings
                     </Link>
                   </li>
                 </ul>
               </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Welcome Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mb-8">
          <h2 className="text-xl font-medium text-gray-600">Welcome, Alex! Here's what's happening today</h2>
          <p className="text-gray-500 mt-1">Good morning! Ready for another productive day?</p>
        </div>

        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* My Clubs Section */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-600 mb-4">My Clubs</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Photography Club */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-600">Photography Club</h3>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">85</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Next event in 2 days
                  </div>
                  <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition">
                    View Club
                  </button>
                </div>

                {/* Debate Society */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-600">Debate Society</h3>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">92</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Next event in 5 days
                  </div>
                  <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition">
                    View Club
                  </button>
                </div>

                {/* Chess Club */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-600">Chess Club</h3>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">78</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Next event in 1 week
                  </div>
                  <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition">
                    View Club
                  </button>
                </div>

                {/* Music Band */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-600">Music Band</h3>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm">88</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Next event in 3 days
                  </div>
                  <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition">
                    View Club
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="mb-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-medium text-gray-600">Upcoming Events</h2>
    <a href="#" className="text-orange-500 hover:underline">View All</a>
  </div>

  {events.length === 0 ? (
    <p className="text-gray-500">No upcoming events</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {events.slice(0, 4).map((event, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-600">{event.event_name}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {event.event_date},
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            {event.venue}
          </div>
        </div>
      ))}
    </div>
  )}
</div>

           
          </div>

          {/* Right Column */}
          <div className="w-80">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                <svg className="w-8 h-8 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-2xl font-bold">12</span>
                <span className="text-sm text-gray-500">Events Attended</span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                <svg className="w-8 h-8 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="text-2xl font-bold">4</span>
                <span className="text-sm text-gray-500">Total Clubs</span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                <svg className="w-8 h-8 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-2xl font-bold">450</span>
                <span className="text-sm text-gray-500">Credits Earned</span>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                <svg className="w-8 h-8 text-yellow-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <span className="text-2xl font-bold">8</span>
                <span className="text-sm text-gray-500">Achievements</span>
              </div>
            </div>

            {/* Recent Announcements */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-gray-600">Recent Announcements</h2>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </div>

              {announcements.length === 0 ? (
              <p className="text-gray-500">No announcements available</p>
            ) : (
              <div>
                {announcements.map((announcement, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4 mb-4">
                    <h3 className="text-lg font-medium text-gray-600">{announcement.club_name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{announcement.announcement_text}</p>
                    <span className="text-gray-400 text-xs mt-2">{announcement.created_at}</span>
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;