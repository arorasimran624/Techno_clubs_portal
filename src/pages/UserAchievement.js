import React,{ useState } from "react";
import { Home,Trophy, LayoutDashboard, Users, Calendar, Award, BookOpen, Bell, Settings, Linkedin } from 'lucide-react';

import { Link } from "react-router-dom";
const AchievementsUser = () => {
  const [certificate, setCertificate] = useState(null);  // For storing the uploaded file
  const [pdfUrl, setPdfUrl] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setCertificate(file);
      setPdfUrl(fileUrl);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-red-400 mb-10">Techno Clubs</h1>
        
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Achievements</h1>
          <p className="text-gray-600 mb-8">Track your progress and contributions</p>
          <div className="flex justify-end mb-6">
            <label className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
              <Award size={20} />
              Upload Certificate
              <input 
                type="file" 
                accept="application/pdf" 
                className="hidden" 
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {/* Points Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <PointsCard 
              title="Attendance Points" 
              points={450} 
              max={500} 
              percentage={90}
            />
            <PointsCard 
              title="Volunteering Points" 
              points={280} 
              max={400} 
              percentage={70}
            />
            <PointsCard 
              title="Organizing Points" 
              points={320} 
              max={600} 
              percentage={53}
            />
          </div>
          
          {/* Badges Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gamified Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <BadgeCard 
              title="Bronze" 
              points={200} 
              max={300} 
              percentage={67} 
              color="bg-amber-600"
            />
            <BadgeCard 
              title="Silver" 
              points={150} 
              max={500} 
              percentage={30} 
              color="bg-gray-400"
            />
            <BadgeCard 
              title="Gold" 
              points={100} 
              max={1000} 
              percentage={10} 
              color="bg-yellow-400"
            />
          </div>
          
          {/* Share Button */}
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Linkedin size={20} />
            Share to LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active = false }) => {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${active ? 'bg-red-50 text-red-400' : 'text-gray-600 hover:bg-gray-100'}`}>
      {React.cloneElement(icon, { size: 20 })}
      <span className="font-medium">{label}</span>
    </div>
  );
};

// Points Card Component
const PointsCard = ({ title, points, max, percentage }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
      <div className="text-5xl font-bold text-green-500 mb-4">{points}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className="bg-green-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-600 text-sm">{points} / {max} points</p>
    </div>
  );
};

// Badge Card Component
const BadgeCard = ({ title, points, max, percentage, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col items-center mb-4">
        <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-2`}>
          <Trophy className="text-white" size={24} />
        </div>
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className="bg-green-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-600 text-sm text-center">{points} / {max} points</p>
    </div>
  );
};

export default AchievementsUser;