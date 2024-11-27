# Role-Based Access Control (RBAC) UI

This project is the **Frontend Developer Intern Assignment** for **VRV Security**. It is a responsive web application that allows users to manage **users**, **roles**, and **permissions** with a focus on clarity, efficiency, and security.

---

## 🔍 **Overview**

The project demonstrates a **Role-Based Access Control (RBAC)** system. The primary goal is to provide an intuitive UI for administrators to handle user management tasks such as:
- **User Management**: Add, edit, or delete users.
- **Role Management**: Create and assign roles.
- **Permission Management**: Define and allocate permissions.

The app leverages the following technologies:
- **React** with **React Router** for efficient UI rendering and navigation.
- **Material-UI (MUI)** for modern, responsive components.
- A robust, scalable folder structure to enhance maintainability.

---

## ⚡ **Features**

1. **Responsive Sidebar Navigation:**
   - Toggleable sidebar for small screens.
   - Persistent sidebar for larger screens.

2. **Dynamic Navigation:**
   - Links to `User Management`, `Role Management`, and `Permission Management`.
   - Unique icons for each section.

3. **Role-Based UI:**
   - Tailored experiences for managing users, roles, and permissions.

4. **Material-UI Integration:**
   - Modern design with consistent styling and transitions.

---

## 🛠️ **Setup Instructions**

Follow these steps to get the project running locally:

### Prerequisites:
- Node.js (v14 or higher)
- npm or yarn

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Manish50518/RBAC.git
   cd RBAC
## 📁 **Folder Structure**

This is an overview of the project folder structure to help you understand the organization of the project:

```plaintext
RBAC/
├── public/                # Static files like index.html, images, etc.
│   ├── index.html         # Main HTML file
│   └── favicon.ico        # Favicon for the project
│
├── src/                   # All source code files
│   ├── components/        # Reusable components such as buttons, forms, etc.
│   │   ├── Navbar.js      # The Navbar component
│   │   ├── Sidebar.js     # The Sidebar component
│   │   └── UserCard.js    # A user display component
│   │
│   ├── pages/             # Pages that define the structure of the sections
│   │   ├── UserManagement.js  # User management page
│   │   ├── RoleManagement.js  # Role management page
│   │   └── PermissionManagement.js  # Permission management page
│   │
│   ├── App.js             # Main app component that handles routing and layout
│   ├── index.js           # Entry point of the application where ReactDOM is rendered
│   └── styles/            # Custom styling for the app
│       ├── theme.js       # Theme customization for Material-UI
│       └── global.css     # Global styles applied across the app
│
├── package.json           # NPM dependencies and scripts
├── .gitignore             # List of files/folders to ignore in version control
└── README.md              # Project documentation (this file)

