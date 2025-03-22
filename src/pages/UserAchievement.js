import React, { useState } from "react";
import { Home, Trophy, Award, Linkedin } from 'lucide-react';
import { Document, Page } from 'react-pdf';
import { Link } from "react-router-dom";

// Import pdfjs from pdfjs-dist
import { pdfjs } from 'react-pdf';

// Set the worker source path from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AchievementsUser = () => {
  const [certificate, setCertificate] = useState(null);  // For storing the uploaded file
  const [pdfUrl, setPdfUrl] = useState(null);  // To display the PDF URL for rendering
  const [numPages, setNumPages] = useState(null); // For tracking total number of pages in the PDF
  const [pageNumber, setPageNumber] = useState(1); // For current page to display

  // Handle file upload and set the PDF file URL
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

  // Callback function to capture number of pages in the PDF
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-red-400 mb-10">Techno Clubs</h1>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {/* Sidebar Links */}
            <li>
              <Link to="/userdashboard" className="flex items-center gap-3 p-3 bg-orange-100 rounded-md text-gray-800 font-medium">
                <Home className="w-5 h-5 text-gray-600" />
                Dashboard
              </Link>
            </li>
            {/* Add other links here */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Achievements</h1>
          <p className="text-gray-600 mb-8">Track your progress and contributions</p>
          
          {/* Upload Certificate Button */}
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
            {/* Add your PointsCard components here */}
          </div>

          {/* PDF Display */}
          {pdfUrl && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Uploaded Certificate</h2>
              <Document 
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Loading PDF...</p>}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <div className="mt-4 flex justify-center gap-4">
                {/* Navigation for pages */}
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Previous
                </button>
                <span>Page {pageNumber} of {numPages}</span>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Gamified Badges Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gamified Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Add your BadgeCard components here */}
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

export default AchievementsUser;
