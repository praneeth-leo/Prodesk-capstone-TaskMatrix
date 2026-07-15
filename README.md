# Prodesk-capstone-TaskMatrix
# TaskMatrix

## Enterprise Agile Project Management Platform

## Capstone Project

TaskMatrix is a full-stack Agile Project Management Platform built to help software teams plan, organize, and manage projects efficiently. Inspired by modern project management tools like Jira, Trello, and Asana, it provides collaborative workspaces where teams can assign tasks, track project progress, communicate in real time, and manage workflows through an interactive Kanban board.

This project is being developed as part of the Capstone Program to demonstrate enterprise application architecture, scalable system design, and full-stack development using modern web technologies.

The application follows a **Modular Monolith Architecture**, separating the frontend and backend into independent applications within a single repository for easier maintenance and scalability.

---

# Designated Track

**Full Stack Developer**

---

# Tech Stack

## Frontend

- React 18
- TypeScript
- Vite
- React Router DOM
- Redux Toolkit
- RTK Query
- Tailwind CSS
- Shadcn UI
- React Hook Form
- Zod
- Axios
- Socket.io Client

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Socket.io
- Multer
- Cloudinary

---

## DevOps

- Git
- GitHub
- Vercel
- Render
- MongoDB Atlas

---

# Folder Structure

```text
prodesk-capstone-taskmatrix/

├── frontend/
│
├── backend/
│
├── docs/
│     ├── figma/
│     └── architecture/
│
├── README.md
├── Prompts.md
└── .gitignore
```

---

# Figma Design

Public Design File

```
Add your Figma public link here
```

---

# Planned Features

## Authentication

- User Registration
- User Login
- Logout
- JWT Authentication
- Refresh Tokens
- Protected Routes
- Role-Based Authorization

---

## Dashboard

- Workspace Overview
- Recent Projects
- Assigned Tasks
- Activity Feed
- Statistics Cards

---

## Project Management

- Create Project
- Edit Project
- Delete Project
- Archive Project
- Search Projects
- Filter Projects

---

## Task Management

- Create Tasks
- Update Tasks
- Delete Tasks
- Assign Members
- Due Dates
- Priority Levels
- Status Tracking
- Labels
- File Attachments

---

## Kanban Board

- Drag & Drop Tasks
- To Do
- In Progress
- Review
- Completed

---

## Team Collaboration

- Invite Members
- Team Roles
- Comments
- Activity Timeline
- Online Users

---

## Notifications

- Task Assignment Alerts
- Due Date Reminders
- Project Updates
- Real-Time Notifications

---

## Real-Time Features

- Live Task Updates
- Live Notifications
- Online Team Members
- Real-Time Collaboration

---

## User Profile

- Update Profile
- Change Password
- Upload Profile Picture

---

## Settings

- Workspace Settings
- Notification Preferences
- Security Settings

---

# UI Screens

- Login
- Register
- Dashboard
- Projects
- Kanban Board
- Task Details
- Team Members
- Notifications
- Calendar
- User Profile
- Settings

---

# Database Collections

## Planned MongoDB Collections

- Users
- Projects
- Tasks
- Comments
- Notifications

---

# System Architecture

The architecture follows a Modular Monolith approach with clearly separated frontend and backend applications.

The backend communicates with MongoDB Atlas for data persistence and Cloudinary for media storage, while Socket.io enables real-time communication between connected users.

> Add your exported System Architecture Diagram here.

---

# Entity Relationship Diagram (ERD)

The ERD illustrates the relationships between the following collections:

- Users
- Projects
- Tasks
- Comments
- Notifications

> Add your exported ERD image here.

---

# UI Wireframes

The wireframes include the primary application screens designed in Figma.

- Login Screen
- Dashboard
- Projects
- Kanban Board
- Task Details
- Profile
- Settings

Figma files are available inside:

```text
docs/figma/
```

---

# Planned Folder Structure

## Frontend

```text
src/

api/
assets/
components/

features/
    auth/
    dashboard/
    projects/
    tasks/
    users/
    notifications/

hooks/
layouts/
pages/
routes/
services/
store/
types/
utils/

App.tsx
```

---

## Backend

```text
src/

config/
controllers/
middleware/
models/
routes/
services/
sockets/
validators/
utils/

server.js
```

---

# Future Improvements

- AI Task Suggestions
- Sprint Planning Assistant
- Calendar Integration
- Email Notifications
- Analytics Dashboard
- Activity Logs
- Dark Mode
- Redis Caching
- Docker Support
- CI/CD Pipeline
- Slack Integration

---

# Deployment

## Frontend

- Vercel

## Backend

- Render

## Database

- MongoDB Atlas
