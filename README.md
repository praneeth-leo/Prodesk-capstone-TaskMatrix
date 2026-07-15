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
https://www.figma.com/design/Jk6FXNNHA411zqDQKdQ0MI/TaskMatrix---Enterprise-Agile-Project-Management-Platform?node-id=1-3&t=PyzGa3XKfeR9rM9Y-1
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

<img width="7944" height="5168" alt="system arch" src="https://github.com/user-attachments/assets/12b48fb1-eca0-4d51-a05f-0760e747c4ab" />


---

# Entity Relationship Diagram (ERD)

The ERD illustrates the relationships between the following collections:

- Users
- Projects
- Tasks
- Comments
- Notifications

<img width="1656" height="751" alt="erd" src="https://github.com/user-attachments/assets/03c53492-934b-4cef-885d-3a5331cc3936" />


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

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
