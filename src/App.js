import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminDashboard"; // Import your dashboard component
import TechClubDashboard from "./pages/AdminMyClub";
import CreateEventPage from "./pages/AdminEvent";
import PendingRequests from "./pages/AdminRequests";
import TechnoClubsAnnouncements from "./pages/AdminAnnouncements";
import ProfileSettings from "./pages/AdminSettings";
import TechnoClubsLanding from "./pages/LandingPage";
import ResourcesPage from "./pages/AdminResources";
import AchievementsPage from "./pages/AdminAchievements";
import StudentDashboard from "./pages/UserDashboard";
import UserMyClub from "./pages/UserMyClub";
import EventsDashboard from "./pages/UserEvents";
import AchievementsUser from "./pages/UserAchievement";
import ResourcesUser from "./pages/UserResources";
import UserAnnouncements from "./pages/UserAnnouncements";
import UserSettings from "./pages/UserSettings";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TechnoClubsLanding />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/club" element={<TechClubDashboard />} />
      </Routes>
      <Routes>
        <Route path="/event" element={<CreateEventPage />} />
      </Routes>
      <Routes>
      <Route path="/requests" element={<PendingRequests />} />
      </Routes>
      <Routes>
      <Route path="/announcements" element={<TechnoClubsAnnouncements />} />
      </Routes>
      <Routes>
      <Route path="/settings" element={<ProfileSettings />} />
      </Routes>
      <Routes>
      <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
      <Routes>
      <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
      <Routes>
        <Route path="/userdashboard" element={<StudentDashboard />} />
      </Routes>
      <Routes>
        <Route path="/usermyclub" element={<UserMyClub />} />
      </Routes>
      <Routes>
        <Route path="/userevent" element={<EventsDashboard />} />
      </Routes>
      <Routes>
        <Route path="/userachievements" element={<AchievementsUser />} />
      </Routes>
      <Routes>
        <Route path="/userresource" element={<ResourcesUser />} />
      </Routes>
      <Routes>
        <Route path="/userannouncements" element={<UserAnnouncements />} />
      </Routes>
      <Routes>
        <Route path="/usersettings" element={<UserSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
