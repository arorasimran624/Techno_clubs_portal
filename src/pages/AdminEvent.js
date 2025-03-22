
import { Link } from "react-router-dom";
import { useState } from "react"
import {
    Calendar, Clock,
    MapPin,
    Home,
    Users,
    CalendarIcon,
    Award,
    ClockIcon,
    FileText,
    Bell,
    Settings, Folder,
    Upload,
} from "lucide-react"
import axios from "axios";


const CreateEventPage = () => {
    const [eventName, setEventName] = useState("")
    const [eventData, setEventData] = useState({
        event_name: "",
        event_date: "",
        venue: "",
        description: "",
        event_image: ""
    });

    const [eventDate, setEventDate] = useState("")
    const [venue, setVenue] = useState("")
    const [description, setDescription] = useState("")
    const [qrCodeEnabled, setQrCodeEnabled] = useState(true)
    const [feedbackSurveyEnabled, setFeedbackSurveyEnabled] = useState(true)
    const [reminders, setReminders] = useState({
        "24hours": true,
        "1hour": true,
        atStart: true,
    })
    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/create_event/", eventData);
            alert("Event Created Successfully!");
        } catch (error) {
            alert("Error creating event");
        }
    };

    const enrolledStudents = [
        { name: "Alex Johnson", time: "2 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Sarah Wilson", time: "3 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Mike Brown", time: "Yesterday", avatar: "/placeholder.svg?height=40&width=40" },
    ]

    const handleToggleReminder = (key) => {
        setReminders((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Left Sidebar */}
            <div className="w-60 bg-white border-r border-gray-200 p-4">
                <h2 className="text-xl font-semibold text-gray-600 mb-8">Techno Clubs</h2>

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
                <h1 className="text-2xl font-semibold text-gray-700 mb-1">Create New Event</h1>
                <div className="text-sm text-gray-500 mb-6">
                    <span>Events</span> &gt; <span>Create New Event</span>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                        <input
                            type="text"
                            placeholder="Enter event name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            name="event_name" // Match this with the property in state
                            value={eventData.event_name} // Match this with the state
                            onChange={handleChange} // This will update the state
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="yyyy / mm / dd"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                name="event_date" // Match this with the property in state
                                value={eventData.event_date} // Match this with the state
                                onChange={handleChange} // This will update the state
                                required
                            />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter venue location"
                                className="w-full p-2 pl-9 border border-gray-300 rounded-md"
                                name="venue" // Match this with the property in state
                                value={eventData.venue} // Match this with the state
                                onChange={handleChange} // This will update the state
                                required
                            />
                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            placeholder="Enter event description"
                            className="w-full p-2 border border-gray-300 rounded-md h-32"
                            name="description" // Match this with the property in state
                            value={eventData.description} // Match this with the state
                            onChange={handleChange} // This will update the state
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                            <Upload className="h-12 w-12 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500">Drag and drop your image here or click to browse</p>
                            
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                        <div className="flex items-start gap-3">
                            <div className="bg-teal-50 p-2 rounded">
                                <svg
                                    className="h-5 w-5 text-teal-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M7 12L10 15L17 8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium">QR Code Check-in</h3>
                                <p className="text-sm text-gray-500">Enable QR code for event check-in</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={qrCodeEnabled}
                                onChange={() => setQrCodeEnabled(!qrCodeEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                        </label>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                        <div className="flex items-start gap-3">
                            <div className="bg-amber-50 p-2 rounded">
                                <svg
                                    className="h-5 w-5 text-amber-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 10H16M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium">Feedback Survey</h3>
                                <p className="text-sm text-gray-500">Create feedback survey for attendees</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={feedbackSurveyEnabled}
                                onChange={() => setFeedbackSurveyEnabled(!feedbackSurveyEnabled)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
                        </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Save Draft
                        </button>
                        <button type="button" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"onClick={handleSubmit}>
                            Publish Event
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Sidebar */}
            <div className="w-64 bg-white border-l border-gray-200 p-4">
                <div className="mb-6">
                    <h3 className="text-gray-500 font-medium mb-4">Enrolled Students</h3>
                    <div className="space-y-4">
                        {enrolledStudents.map((student, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src={student.avatar || "/placeholder.svg"}
                                        alt={student.name}
                                        className="w-10 h-10 rounded-full bg-amber-100"
                                    />
                                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                                </div>
                                <div>
                                    <p className="font-medium">{student.name}</p>
                                    <p className="text-xs text-gray-500">{student.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 mb-6">
                    Reschedule Event
                </button>

                <div>
                    <h3 className="text-gray-500 font-medium mb-4">Auto-Reminders</h3>
                    <div className="space-y-3">
                        <ReminderToggle
                            label="24 hours before event"
                            enabled={reminders["24hours"]}
                            onChange={() => handleToggleReminder("24hours")}
                        />
                        <ReminderToggle
                            label="1 hour before event"
                            enabled={reminders["1hour"]}
                            onChange={() => handleToggleReminder("1hour")}
                        />
                        <ReminderToggle
                            label="At event start"
                            enabled={reminders["atStart"]}
                            onChange={() => handleToggleReminder("atStart")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const SidebarItem = ({ icon, label, active = false }) => {
    return (
        <div
            className={`flex items-center gap-3 p-2 rounded-md ${active ? "bg-orange-50 text-orange-500" : "text-gray-600 hover:bg-gray-100"}`}
        >
            {icon}
            <span className={active ? "font-medium" : ""}>{label}</span>
        </div>
    )
}

const ReminderToggle = ({ label, enabled, onChange }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-amber-500">
                    <Bell className="h-4 w-4" />
                </span>
                <span className="text-sm">{label}</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={enabled} onChange={onChange} />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
            </label>
        </div>
    )
}

export default CreateEventPage
