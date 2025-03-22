import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, SlidersHorizontal, FileText, Download } from 'lucide-react';
import { useEffect, useState } from "react";
import axios from "axios";

const EventsDashboard = () => {
    const [events, setEvents] = useState([]);

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
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-sm">
        <div className="p-6">
          <h1 className="text-xl font-medium text-orange-500">TechnoClubs</h1>
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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Events Dashboard</h1>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Conference Card */}
            {events.length > 0 ? (
                            events.slice(0,4).map((event) => (
                                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img 
                                        src={event.image_url || "https://via.placeholder.com/400"} 
                                        alt={event.event_name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
                                        <div className="flex items-center text-gray-500 mt-2">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>{event.event_date} </span>
                                        </div>
                                        <div className="flex items-center text-gray-500 mt-1">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span>{event.venue}</span>
                                        </div>
                                        <div className="mt-3">
                                            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">
                                                Upcoming
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No upcoming events available.</p>
                        )}
            
          </div>
        </div>

        {/* Next Event Reminder */}
        <div className="bg-amber-100 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Next Event Reminder</h3>
              <p className="text-gray-600 mt-1">Tech Conference 2024 starts in 3 days</p>
            </div>
            <button className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Attended Events */}
          <div className="bg-orange-300 rounded-lg p-6 text-white flex justify-between items-center">
            <div>
              <p className="text-white text-opacity-90 mb-1">Attended Events</p>
              <p className="text-4xl font-bold">12</p>
            </div>
            <svg className="w-10 h-10 text-white text-opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>

          {/* Favorite Events */}
          <div className="bg-amber-300 rounded-lg p-6 text-white flex justify-between items-center">
            <div>
              <p className="text-white text-opacity-90 mb-1">Favorite Events</p>
              <p className="text-4xl font-bold">5</p>
            </div>
            <svg className="w-10 h-10 text-white text-opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
          </div>

          {/* Recommendations */}
          <div className="bg-teal-500 rounded-lg p-6 text-white flex justify-between items-center">
            <div>
              <p className="text-white text-opacity-90 mb-1">Recommendations</p>
              <p className="text-4xl font-bold">8</p>
            </div>
            <svg className="w-10 h-10 text-white text-opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Data Science Workshop</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">March 1, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">UX Design Meetup</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">February 28, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Cloud Computing Seminar</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">February 25, 2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                      Missed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDashboard;