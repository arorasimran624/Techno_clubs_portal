 import { ChromeIcon as Google, Calendar, Trophy, Lock } from "lucide-react" 
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
export default function TechnoClubs() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate(); // Add navigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Hardcoded login credentials for admin and user
    const adminCredentials = { username: 'admin', password: 'admin123' };
    const userCredentials = { username: 'user', password: 'user123' };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      console.log('Login as Admin');
      navigate('/dashboard'); // Navigate to admin dashboard
    } 
     else {
      console.log('Login as Admin');
      navigate('/userdashboard');
    }
    
    setShowLoginModal(false);
    // Reset form
    setUsername('');
    setPassword('');
    setIsAdmin(false);
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12">
        <div className="text-3xl font-bold text-orange-400">TechnoClubs</div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-gray-900">
            Testimonials
          </a>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-amber-400 text-white font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          <span className="bg-gradient-to-r from-teal-500 via-green-500 to-amber-400 bg-clip-text text-transparent">
            Transform Your
            <br />
            Tech Club
            <br />
            Experience
          </span>
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
          Empower your student organization with modern tools for seamless management, engagement, and growth. Join
          thousands of successful tech clubs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-amber-400 text-white font-medium flex items-center justify-center gap-2"
            onClick={() => setShowLoginModal(true)}
          >
            <Google size={20} />
            Login with Google
          </button>
          <button className="px-6 py-3 rounded-full border border-amber-400 text-amber-500 font-medium hover:bg-amber-50">
            Learn More
          </button>
        </div>
      </main>
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      
      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 via-green-500 to-orange-400 bg-clip-text text-transparent">
              Powerful Features for Modern Clubs
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Everything you need to run your tech club efficiently and engage your 
            members effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Calendar size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Smart Club Management
            </h3>
            <p className="text-gray-600">
              Streamline your club operations with our intuitive management tools. Track 
              memberships, events, and resources all in one place.
            </p>
          </div>
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Calendar size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Smart Club Management
            </h3>
            <p className="text-gray-600">
              Streamline your club operations with our intuitive management tools. Track 
              memberships, events, and resources all in one place.
            </p>
          </div>
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Calendar size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Smart Club Management
            </h3>
            <p className="text-gray-600">
              Streamline your club operations with our intuitive management tools. Track 
              memberships, events, and resources all in one place.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Trophy size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Achievement System
            </h3>
            <p className="text-gray-600">
              Gamify your club experience with our comprehensive achievement system. 
              Recognize and reward member contributions.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Lock size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Secure Collaboration
            </h3>
            <p className="text-gray-600">
              Share resources and communicate securely within your club. Built-in 
              permissions ensure data stays protected.
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      
      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 via-green-500 to-orange-400 bg-clip-text text-transparent">
              Powerful Features for Modern Clubs
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Everything you need to run your tech club efficiently and engage your 
            members effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Calendar size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Smart Club Management
            </h3>
            <p className="text-gray-600">
              Streamline your club operations with our intuitive management tools. Track 
              memberships, events, and resources all in one place.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Trophy size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Achievement System
            </h3>
            <p className="text-gray-600">
              Gamify your club experience with our comprehensive achievement system. 
              Recognize and reward member contributions.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-orange-400 mb-6">
              <Lock size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Secure Collaboration
            </h3>
            <p className="text-gray-600">
              Share resources and communicate securely within your club. Built-in 
              permissions ensure data stays protected.
            </p>
          </div>
        </div>
      </section>
    </div>
    {/* Hero Section */}
    <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-teal-50">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="text-teal-600">Ready to Transform </span>
          <span className="text-amber-500">Your Club?</span>
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Join thousands of successful tech clubs already using TechnoClubs to 
          manage their organizations.
        </p>
        
        <a 
          href="/get-started-free" 
          className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-amber-400 text-white font-medium text-lg shadow-md hover:shadow-lg transition-shadow"
        >
          Get Started Free
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">TechnoClubs</h2>
            <p className="text-gray-300 mb-6">
              Empowering student organizations with modern management tools.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com" className="text-gray-300 hover:text-white">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/features" className="text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="/support" className="text-gray-300 hover:text-white">Support</a>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">Login</h3>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">Login as Admin</span>
                </label>
              
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-amber-400 text-white font-medium rounded-md hover:shadow-md transition-shadow"
              >
                Login
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account? <a href="#" className="text-teal-600 hover:underline">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
