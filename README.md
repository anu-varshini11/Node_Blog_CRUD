# BLOG CRUD APPLICATION

This is a basic Express API server with a router structure for handling authentication and blog-related operations. It utilizes Node.js along with Express framework.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/AakashSuresh2003/Node_Blog_CRUD.git
```

2. Navigate into the project directory:

```bash
cd Node_Blog_CRUD
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the server, run:

```bash
npm start
```

The server will start listening on the specified port.

## Project Structure

The project has the following directory structure:

```
.
├── controller
│   ├── authController.js
│   └── blogController.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── blogModel.js
├── public
├── routes
│   ├── authRouter.js
│   └── blogRouter.js
├── app.js
└── README.md
```

- **controller:** Contains controllers for handling authentication and blog-related operations.
- **middleware:** Contains middleware for authentication.
- **models:** Contains the model schema for the blog.
- **public:** Contains static files, if any.
- **routes:** Contains route handlers for authentication and blog operations.
- **app.js:** Entry point of the application.

## API Endpoints

### Authentication

- **POST /api/v1/auth/register:** Register a new user.
- **POST /api/v1/auth/login:** Login with user credentials.
- **GET /api/v1/auth/logout:** Logout the current user.
- **GET /api/v1/auth/refetch:** Refetch user data.

### Blog

- **GET /api/v1/blog:** Get all blogs.
- **GET /api/v1/blog/:id:** Get a specific blog by ID.
- **POST /api/v1/blog:** Create a new blog.
- **PUT /api/v1/blog/:id:** Update a blog by ID.
- **DELETE /api/v1/blog/:id:** Delete a blog by ID.

Note: Authentication is required for accessing blog-related endpoints.
