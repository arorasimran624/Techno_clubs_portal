import { Home, Users, Calendar, Award, FileText, Bell, Settings, Edit, MapPin, Clock, UserPlus, Folder } from "lucide-react"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const TechClubDashboard = () => {
    const [members, setMembers] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/events/") // Adjust the URL based on your backend server's address
            .then(response => {
                setEvents(response.data.events); // Set events data from the backend response
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
                setAnnouncements(response.data.announcements); // Set fetched announcements
            } catch (error) {
                console.error("Error fetching announcements:", error);
            }
        };
        fetchAnnouncements();
    }, []);
    useEffect(() => {
        axios.get("http://localhost:8000/requests")
            .then(response => {
                console.log("Before setting members:", response.data);

                // Fix: Use response.data.requests instead of response.data.members
                if (response.data && Array.isArray(response.data.requests)) {
                    setMembers(response.data.requests);
                    console.log("Updated members:", response.data.requests);
                } else {
                    console.error("Invalid data format:", response.data);
                }
            })
            .catch(error => console.error("Error fetching members:", error));
    }, []);




    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-[#F47B54]">TECHNO CLUB</h1>
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
            <div className="flex-1">
                {/* Club Header */}
                <div className="relative">
                    <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: "url('/club1.jpg')" }}
                    >

                    </div>
                    <div className="flex items-end px-8 -mt-16">
                        
                        <div className="ml-4 pb-4">
                            <h2 className="text-2xl font-bold text-white">Tech Innovators Club</h2>
                        </div>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Stats and Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard number="156" label="Total Members" />
                            <StatCard number="89" label="Active Members" />
                            <StatCard number="24" label="Events This Year" />
                            <StatCard number="7" label="Pending Requests" />
                        </div>

                        {/* About */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">About Club</h3>
                            <p className="text-gray-600">
                                Tech Innovators Club is a community of passionate technology enthusiasts dedicated to exploring and
                                sharing knowledge about the latest innovations in the tech world. We organize regular workshops,
                                hackathons, and networking events.
                            </p>
                        </div>

                        {/* Members */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Members</h3>
                                <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md">
                                    <UserPlus className="w-4 h-4" />
                                    Add Member
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {members.length > 0 ? (
                                    members.slice(0,4)
                                    .map((member, index) => (
                                        <MemberCard
                                            key={index}
                                            name={member.student_name || "Unknown"}
                                            role={member.club_name || "Member"}
                                            image={member.profile_picture || "/placeholder.svg"}
                                        />
                                    ))
                                ) : (
                                    <p>No members available.</p>
                                )}


                            </div>
                        </div>
                    </div>

                    {/* Right Column - Announcements and Events */}
                    <div className="space-y-8">
                        {/* Announcements */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Recent Announcements</h3>
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

                        {/* Upcoming Events */}
                        {/* Upcoming Events */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                            <div className="space-y-4">
                                {events.length > 0 ? (
                                    events.slice(0, 3).map((event, index) => (  // Limit to 3 events
                                        <EventCard
                                            key={index}
                                            date={event.event_date}
                                            title={event.event_name}
                                            time={event.event_date}  // Adjust if you have a separate field for time
                                            location={event.venue}
                                        />
                                    ))
                                ) : (
                                    <p>No events available.</p>
                                )}
                            </div>
                        </div>

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
            className={`flex items-center px-6 py-3 cursor-pointer ${active ? "bg-[#F47B54] bg-opacity-20 border-l-4 border-[#F47B54]" : "hover:bg-gray-100"}`}
        >
            <div className={`${active ? "text-[#F47B54]" : "text-gray-500"}`}>{icon}</div>
            <span className={`ml-3 ${active ? "text-[#F47B54] font-medium" : "text-gray-600"}`}>{label}</span>
        </div>
    )
}

// Component for stat cards
const StatCard = ({ number, label }) => {
    return (
        <div className="bg-[#FFF0C8] rounded-md p-6">
            <div className="text-4xl font-bold text-[#F47B54]">{number}</div>
            <div className="text-gray-600">{label}</div>
        </div>
    )
}

// Component for member cards
const MemberCard = ({ name, role, image }) => {
    return (
        <div className="flex items-center p-4 border rounded-md">
            <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-4">
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        </div>
    )
}

// Component for announcement cards
const AnnouncementCard = ({ title, time }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-md">
            <div className="font-medium">{title}</div>
            <div className="text-sm text-gray-500 mt-1">{time}</div>
        </div>
    )
}

// Component for event cards
const EventCard = ({ date, title, time, location }) => {
    return (
        <div className="flex">
            <div className="bg-[#F47B54] text-white p-3 rounded-md text-center min-w-[70px]">
                <div className="font-bold">{date}</div>
            </div>
            <div className="ml-4">
                <div className="font-semibold">{title}</div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {time}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location}
                </div>
            </div>
        </div>
    )
}

export default TechClubDashboard

