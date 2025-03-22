import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, SlidersHorizontal, FileText, Download } from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const resources = [
    {
      id: 1,
      title: 'Club Guidelines 2024',
      description: 'Official guidelines and regulations for club activities',
      fileSize: '2.4 MB',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: 'Event Planning Template',
      description: 'Standard template for organizing club events',
      fileSize: '1.8 MB',
      fileType: 'DOCX'
    },
    {
      id: 3,
      title: 'Budget Report Q1',
      description: 'Financial report for the first quarter',
      fileSize: '3.2 MB',
      fileType: 'XLSX'
    }
  ];

  const handleDownload = (id) => {
    console.log(`Downloading resource with id: ${id}`);
    // Implement download functionality here
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="flex flex-col items-center mb-6">
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

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-medium text-gray-700 mb-1">Resources</h1>
          <p className="text-gray-500 mb-6">Club Documents and Materials</p>
          
          {/* Search and filter */}
          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              <SlidersHorizontal size={18} />
              Filter by club
            </button>
          </div>
          
          {/* Resources grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(resource => (
              <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="text-amber-500" size={24} />
                  </div>
                  
                  <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="text-gray-500 text-sm">
                    {resource.fileSize} • {resource.fileType}
                  </div>
                </div>
                
                <button
                  onClick={() => handleDownload(resource.id)}
                  className="w-full py-3 bg-[#e97055] hover:bg-[#d85f45] text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
