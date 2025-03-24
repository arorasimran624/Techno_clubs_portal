import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { X,Home, Search, SlidersHorizontal, FileText, Download ,Upload} from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",         // Resource Title
       
    club_name: "",     // Name of the Club
    description: "",   // Short Description
    file: null         // File Upload
  });
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/resources");
        const data = await response.json();
  
        console.log("Fetched resources:", data); // Debugging output
  
        if (data.resources && Array.isArray(data.resources)) {
          setResources(data.resources); // Set only the array
        } else {
          console.error("Unexpected response format:", data);
          setResources([]); // Ensure `resources` is always an array
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
        setResources([]); // Prevent breaking the UI
      }
    };
  
    fetchResources();
  }, []);
  
  
  
  const handleDownload = (id) => {
    console.log(`Downloading resource with id: ${id}`);
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpload = async (event) => {
    event.preventDefault();
  
    if (!formData.file) {
      alert("Please select a file to upload.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);  // Fixed key
    formDataToSend.append("club_name", formData.club_name);  // Fixed key
    formDataToSend.append("description", formData.description);
    formDataToSend.append("file", formData.file);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/upload-resource/", {
        method: "POST",
        body: formDataToSend,
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("File uploaded successfully!");
        console.log("Uploaded file ID:", data.id);
        setShowUploadForm(false);
        // Refresh the resources list
        setResources([...resources, data]);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
        <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-medium text-gray-700">Resources</h1>
              <p className="text-gray-500">Club Documents and Materials</p>
            </div>
            <button onClick={() => setShowUploadForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#e97055] text-white rounded-lg">
              <Upload size={18} /> Upload Resource
            </button>
          </div>
          {showUploadForm && ( 
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg w-[500px] shadow-lg relative">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        onClick={() => setShowUploadForm(false)}
      >
        <X size={24} />
      </button>

      {/* Form Title */}
      <h2 className="text-xl font-semibold mb-6 text-center">Upload New Resource</h2>

      {/* Upload Form */}
      <form onSubmit={handleUpload}>
  <input 
    type="text"  
    name="title"  // Fixed name attribute
    placeholder="Resource Name"  
    value={formData.title}  
    onChange={handleInputChange} 
    className="w-full mb-3 p-3 border rounded-lg" 
    required 
  />
  <input  
    type="text"  
    name="club_name"  // Fixed name attribute
    placeholder="Club Name"  
    value={formData.club_name}  
    onChange={handleInputChange}   
    className="w-full mb-3 p-3 border rounded-lg"   
    required  
  />
  <textarea 
    name="description"  
    placeholder="Short Description"  
    value={formData.description}  
    onChange={handleInputChange}  
    className="w-full mb-3 p-3 border rounded-lg resize-none"  
    required
  ></textarea>
  <input 
    type="file"  
    accept=".pdf,.doc,.docx"  
    onChange={handleFileChange}  
    className="w-full mb-4 p-2 border rounded-lg"  
    required  
  />
  <div className="flex justify-end space-x-3">
    <button 
      type="button"  
      onClick={() => setShowUploadForm(false)}  
      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
    >
      Cancel
    </button>
    <button 
      type="submit"  // Removed onClick
      className="px-5 py-2 bg-[#e97055] text-white rounded-lg"
    >
      Upload Document
    </button>
  </div>
</form>
  </div>
  </div>
)}

          
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
          {resources && Array.isArray(resources) && resources.length > 0 ? (
  resources.map((resource) => (
    <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
        <a 
          href={resource.file_url} 
          download 
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#e97055] text-white rounded-lg hover:bg-[#d85c44]"
        >
          <Download size={18} />
          Download
        </a>
      </div>
    </div>
  ))
) : (
  <p>No resources found.</p>
)}


          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
