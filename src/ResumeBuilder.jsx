import { useState , useEffect } from "react"
import { FiShare2, FiDownload } from "react-icons/fi"
import { IoWarningOutline } from "react-icons/io5"
import axios from "axios";
import "./ResumeBuilder.css"

const ResumeBuilder = () => {
    const [activeTab, setActiveTab] = useState("Basic Details");
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      location: "",
    });
  
    // Fetch JSON data from API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/resume"); // Replace with your API endpoint
          setFormData(response.data); // Assuming API response is an object matching the formData keys
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="resume-builder">
      <div className="header">
        <div className="logo">ResumeAI</div>
        <div className="header-right">
          <button className="btn-secondary">Templates</button>
          <button className="btn-secondary">Pricing</button>
          <button className="btn-primary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "Basic Details" ? "active" : ""}`}
              onClick={() => setActiveTab("Basic Details")}
            >
              Contact Info
            </button>
            <button
              className={`tab ${activeTab === "Experience" ? "active" : ""}`}
              onClick={() => setActiveTab("Experience")}
            >
              Experience
            </button>
            <button
              className={`tab ${activeTab === "Education" ? "active" : ""}`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
            <button className={`tab ${activeTab === "Skills" ? "active" : ""}`} onClick={() => setActiveTab("Skills")}>
              Skills
            </button>
          </div>

          <div className="form-section">
            <h2>Basic Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Primary Specialization</label>
                <input type="text" name="Specialization" value={formData.basic_details.primary_specialization} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" name="Date of Birth" value={formData.basic_details.dob} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input type="text" name="Gender" value={formData.basic_details.gender} onChange={handleInputChange} />
              </div>
              
            </div>
            <div className="form-group mt-2">
                <label>Description</label>
                <input type="email" name="Description" value={formData.basic_details.brief_bio} onChange={handleInputChange} />
            </div>
            <div className="ai-suggestion">
              <IoWarningOutline className="icon" />
              <div className="suggestion-content">
                <p>AI Suggestion</p>
                <p>Consider adding a LinkedIn profile URL to increase your professional presence.</p>
                <button className="btn-link">Add LinkedIn Field</button>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-panel">
          <div className="preview-header">
            <div className="template-selector">
              <button className="template-btn active">Modern</button>
              <button className="template-btn">Professional</button>
              <button className="template-btn">Creative</button>
              <button className="template-btn">Simple</button>
            </div>
            <div className="preview-actions">
              <button className="icon-btn">
                <FiShare2 />
              </button>
              <button className="icon-btn">
                <FiDownload />
              </button>
            </div>
          </div>

          <div className="resume-preview">
            <div className="score-indicator">
              <div className="score">75</div>
              <div className="score-label">ATS Score</div>
            </div>

            <div className="resume-content">
              <h1>John Doe</h1>
              <h2>{formData.title}</h2>
             
              <div className="section">
                <h3>Basic Details</h3>
                <p>{formData.basic_details.primary_specialization} {formData.basic_details.dob} {formData.basic_details.gender}</p>
                <p>{formData.basic_details.brief_bio}</p>
              </div>

              <div className="section">
                <h3>Professional Summary</h3>
                <p>Experienced software engineer with 8+ years of expertise in full-stack development...</p>
              </div>

              <div className="section">
                <h3>Work Experience</h3>
                <div className="experience-item">
                  <div className="experience-header">
                    <h4>Senior Software Engineer</h4>
                    <span>2020 - Present</span>
                  </div>
                  <p>Tech Company Inc.</p>
                  <ul>
                    <li>Led development of cloud-native applications...</li>
                    <li>Implemented microservices architecture...</li>
                    <li>Mentored junior developers...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder

