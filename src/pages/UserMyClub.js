import {Home, Search, Calendar, Clock, MapPin } from "lucide-react"
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react"

import axios from "axios"; 
export default function UserMyClub() {
      const [announcement, setAnnouncement] = useState("");
      const [announcements, setAnnouncements] = useState([]);
      const [upcomingEvents, setUpcomingEvents] = useState([]);

useEffect(() => {
  const fetchUpcomingEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/events/"); // Update endpoint if needed
      setUpcomingEvents(response.data.events);
    } catch (error) {
      console.error("Error fetching upcoming events:", error);
    }
  };
  fetchUpcomingEvents();
}, []);

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
      <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-orange-500 mb-10">TECHNO CLUB</h1>

        
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
               </nav>      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Clubs</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-orange-100 text-orange-500 rounded-full font-medium">Active Clubs</button>
          <button className="px-6 py-2 text-gray-500 rounded-full font-medium">Pending Approval</button>
          <button className="px-6 py-2 text-gray-500 rounded-full font-medium">Past Clubs</button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Clubs</h2>

        {/* Active Clubs */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* Tech Innovators Club */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="w-24 h-24 bg-purple-900 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Tech Innovators"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Tech Innovators</h3>
                  <p className="text-gray-500 text-sm">128 members</p>
                </div>
                <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm">Active</button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>Next: Weekly Meetup</span>
              </div>
            </div>
          </div>

          {/* Code Masters Club */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="w-24 h-24 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Code Masters"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Code Masters</h3>
                  <p className="text-gray-500 text-sm">85 members</p>
                </div>
                <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm">Active</button>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>Next: Hackathon Prep</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Join New Club</h2>

        {/* Join New Club */}
        <div className="grid grid-cols-2 gap-6">
          {/* AI Enthusiasts Club */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="w-24 h-24 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="AI Enthusiasts"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <div className="flex-1 p-4">
              <div>
                <h3 className="font-bold text-lg">AI Enthusiasts</h3>
                <p className="text-gray-500 text-sm">105 members</p>
              </div>
              <p className="text-sm text-gray-600 my-2">Exploring the future of AI</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm mt-2">Join Club</button>
            </div>
          </div>

          {/* Web3 Pioneers Club */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="w-24 h-24 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Web3 Pioneers"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <div className="flex-1 p-4">
              <div>
                <h3 className="font-bold text-lg">Web3 Pioneers</h3>
                <p className="text-gray-500 text-sm">89 members</p>
              </div>
              <p className="text-sm text-gray-600 my-2">Building the decentralized future</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm mt-2">Join Club</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Announcements</h2>

        <div className="space-y-6">
          {/* Announcement 1 */}
          {announcements.length > 0 ? (
            announcements.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow-md rounded-md border border-gray-200">
                <h3 className="font-semibold">{item.club_name}</h3>
                <p className="text-sm text-gray-600">{item.announcement_text}</p>
                <p className="text-xs text-gray-400">{item.created_at}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No announcements available</p>
          )}
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-10 mb-6">Upcoming Events</h2>

        <div className="space-y-6">
          {/* Event 1 */}
          {upcomingEvents.length > 0 ? (
    upcomingEvents.slice(0,3).map((event) => (
      <div key={event.id} className="flex gap-4">
        <div className="w-16 h-16 bg-amber-300 rounded-md flex flex-col items-center justify-center text-center">
          
          <span className="text-lg font-bold">{event.event_date}</span>
        </div>
        <div>
          <h3 className="font-medium mb-2">{event.event_name}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Clock size={14} className="mr-1" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No upcoming events</p>
  )}
        </div>
      </div>
    </div>
  )
}

