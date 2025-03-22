Structure 

my-admin-dashboard/
├── public/
│   ├── index.html                   # Entry HTML file
│   ├── favicon.ico                  # Favicon
│   ├── assets/                      # Static files (images, fonts, etc.)
├── src/
│   ├── assets/                      # Global assets (images, icons, etc.)
│   ├── components/                  # Reusable components (buttons, cards, modals, etc.)
│   ├── pages/                       # Main pages of the app
│   │   ├── Login/                   # Login page
│   │   │   └── LoginForm.js         # Login form component
|   |   |── Dashboard/
│   |   |   ├── Dashboard.js         # Main Dashboard page
│   |   |   ├── Stats.js             # Component for displaying stats
│   |   |   ├── Charts.js            # Component for charts (e.g., line, bar charts)
│   |   |   ├── RecentActivity.js    # Component for recent activity
│   |   |   └── Notifications.js     # Component for notifications
│   │   ├── Requests/                # Approval Requests page
│   │   ├── StudentList/             # Student list management
│   │   │   ├── Upload/              # Upload students (CSV or form)
│   │   │   ├── PendingVerifications/# Pending student verifications
│   │   │   ├── List/                # View list of students (info only)
│   │   │   └── Filters/             # Filters for student list (Unassigned, department, etc.)
│   │   ├── MentorList/              # Mentor list management
│   │   │   ├── Upload/              # Upload mentors
│   │   │   ├── PendingVerifications/# Pending mentor verifications
│   │   │   ├── List/                # View list of mentors (info only)
│   │   │   ├── AssignStudents/      # Assign students to mentors
│   │   │   └── Matched/             # List of matched mentors and KPIs
│   │   ├── Settings/                # Settings page
│   │   ├── Help/                    # Help page
│   │   ├── Logout/                  # Logout page (just for logout functionality)
│   │   ├── MatchedMentors/          # List of matched mentors (for students)
│   │   ├── ExtraPages/              # Extra pages for students and mentors
│   │   │   ├── AssignMentors/       # Assign a mentor to a student (steps)
│   │   │   │   ├── MentorList.js    # Step 1: List of mentors to choose from
│   │   │   │   └── MatchedConfirmation.js  # Step 2: Confirm matched mentors
│   │   │   ├── MentorSpecificPages/  # Mentor-specific pages (student list, etc.)
│   │   │   └── StudentSpecificPages/ # Student-specific pages (mentor list, etc.)
│   ├── services/                    # API service files (HTTP requests)
│   ├── hooks/                       # Custom hooks for data fetching, auth, etc.
│   ├── store/                       # Redux or Context API store
│   ├── utils/                       # Utility functions (helpers, formatters)
│   ├── styles/                      # Global styles (CSS/SASS/SCSS)
│   ├── App.js                       # Main App component
│   ├── index.js                     # React entry point
│   └── routes.js                    # Routing configuration (React Router)
├── .gitignore                       # Git ignore file
├── package.json                     # Project metadata and dependencies
├── README.md                        # Project documentation
├── .eslintrc.js                      # ESLint configuration
├── .prettierrc                       # Prettier configuration
├── webpack.config.js                 # Webpack configuration (if custom)
├── .env                              # Environment variables
└── .vscode/                          # VS Code specific settings (optional)
    └── settings.json
